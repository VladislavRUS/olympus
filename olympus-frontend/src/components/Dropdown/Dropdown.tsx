import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper, BodyWrapper, ContentWrapper, Arrow } from './Dropdown.styles';
import OutsideClickHandler from 'react-outside-click-handler';

export type TDropdownMode = 'styled' | 'transparent';

interface IDropdownProps {
  isOpened: boolean;
  content: React.ReactNode;
  onOutsideClick: () => void;
  width: number;
  units?: 'px' | '%';
  zIndex?: number;
  mode?: TDropdownMode;
  arrow?: boolean;
  attachToElement?: boolean;
}

class Dropdown extends React.Component<IDropdownProps> {
  wrapperRef: any | null = null;
  left = 0;
  top = 0;
  width = 0;
  windowEvents = ['resize', 'scroll'];

  handleWrapperRef = (element: any) => {
    this.wrapperRef = element;
  };

  componentDidMount(): void {
    this.update();
  }

  componentDidUpdate(prevProps: Readonly<IDropdownProps>): void {
    if (!prevProps.isOpened && this.props.isOpened) {
      this.update();
      this.addEventListeners();
    }

    if (!this.props.isOpened) {
      this.removeEventListeners();
    }
  }

  addEventListeners() {
    this.windowEvents.forEach(event => {
      window.addEventListener(event, this.update);
    });

    window.addEventListener('keydown', this.onKeyDown);
  }

  removeEventListeners() {
    this.windowEvents.forEach(event => {
      window.removeEventListener(event, this.update);
    });

    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.props.onOutsideClick();
    }
  };

  update = () => {
    if (!this.wrapperRef) {
      return;
    }

    const { units = 'px', attachToElement = true } = this.props;

    let dropdownWidth = this.props.width;

    if (attachToElement) {
      const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = this.wrapperRef;

      this.top = offsetTop + offsetHeight;

      if (units === '%') {
        dropdownWidth = (offsetWidth * dropdownWidth) / 100;
      }

      this.left = offsetLeft + offsetWidth / 2 - dropdownWidth / 2;

      this.width = dropdownWidth;
    } else {
      const rect = this.wrapperRef.getBoundingClientRect();
      const { top, left, width, height } = rect;

      this.top = top + height;

      if (units === '%') {
        dropdownWidth = (width * dropdownWidth) / 100;
      }

      this.left = left + width / 2 - dropdownWidth / 2;
      this.width = dropdownWidth;
    }

    this.forceUpdate();
  };

  renderPortal() {
    if (!this.wrapperRef) {
      return null;
    }

    const { content, mode = 'styled', arrow = true, isOpened, attachToElement = true } = this.props;

    const dropdownContent = typeof content === 'function' ? content() : content;

    const target = attachToElement ? this.wrapperRef : document.body;

    return ReactDOM.createPortal(
      <BodyWrapper pose={isOpened ? 'visible' : 'hidden'} width={this.width} top={this.top} left={this.left}>
        <OutsideClickHandler onOutsideClick={this.props.onOutsideClick} disabled={!this.props.isOpened}>
          {arrow && <Arrow />}
          <ContentWrapper mode={mode}>{dropdownContent}</ContentWrapper>
        </OutsideClickHandler>
      </BodyWrapper>,
      target,
    );
  }

  render() {
    const { children } = this.props;

    return (
      <Wrapper ref={this.handleWrapperRef}>
        {children}
        {this.renderPortal()}
      </Wrapper>
    );
  }
}

export default Dropdown;
