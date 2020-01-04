import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper } from './Dropdown.styles';
import OutsideClickHandler from 'react-outside-click-handler';

interface IDropdownProps {
  isOpened: boolean;
  content: React.ReactNode;
  onOutsideClick: () => void;
  width: number;
  units?: 'px' | '%';
  children: (handleRef: (element: any) => void) => React.ReactNode;
  zIndex?: number;
}

class Dropdown extends React.Component<IDropdownProps> {
  childRef: any | null = null;
  left = 0;
  top = 0;
  width = 0;
  windowEvents = ['resize', 'scroll'];

  handleChildRef = (element: any) => {
    this.childRef = element;
  };

  componentDidMount(): void {
    this.updatePosition();
  }

  componentDidUpdate(prevProps: Readonly<IDropdownProps>): void {
    if (!prevProps.isOpened && this.props.isOpened) {
      this.updatePosition();
      this.addEventListeners();
    }

    if (!this.props.isOpened) {
      this.removeEventListeners();
    }
  }

  addEventListeners() {
    this.windowEvents.forEach(event => {
      window.addEventListener(event, this.updatePosition);
    });

    window.addEventListener('keydown', this.onKeyDown);
  }

  removeEventListeners() {
    this.windowEvents.forEach(event => {
      window.removeEventListener(event, this.updatePosition);
    });

    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.props.onOutsideClick();
    }
  };

  updatePosition = () => {
    if (!this.childRef) {
      return;
    }

    const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = this.childRef;

    this.top = offsetTop + offsetHeight;

    const { units = 'px' } = this.props;

    let width = this.props.width;

    if (units === '%') {
      width = (offsetWidth * width) / 100;
    }

    this.left = offsetLeft + offsetWidth / 2 - width / 2;

    this.width = width;

    this.forceUpdate();
  };

  renderPortal() {
    if (!this.childRef) {
      return null;
    }

    const { content, zIndex = 1 } = this.props;

    const dropdownContent = typeof content === 'function' ? content() : content;

    return ReactDOM.createPortal(
      <Wrapper
        pose={this.props.isOpened ? 'visible' : 'hidden'}
        width={this.width}
        top={this.top}
        left={this.left}
        zIndex={zIndex}
      >
        <OutsideClickHandler onOutsideClick={this.props.onOutsideClick} disabled={!this.props.isOpened}>
          {dropdownContent}
        </OutsideClickHandler>
      </Wrapper>,
      this.childRef,
    );
  }

  render() {
    const { children } = this.props;

    return (
      <>
        {children(this.handleChildRef)}
        {this.renderPortal()}
      </>
    );
  }
}

export default Dropdown;
