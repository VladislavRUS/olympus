import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper } from './Dropdown.styles';
import OutsideClickHandler from 'react-outside-click-handler';

interface IDropdownProps {
  isOpened: boolean;
  content: React.ReactNode;
  onOutsideClick: () => void;
  width: number;
  children: (handleRef: (element: any) => void) => React.ReactNode;
  zIndex?: number;
}

class Dropdown extends React.Component<IDropdownProps> {
  childRef: any | null = null;
  left = 0;
  top = 0;
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

    const rect = this.childRef.getBoundingClientRect();

    const { left, width, bottom } = rect;
    this.top = bottom;
    this.left = left + width / 2 - this.props.width / 2;

    this.forceUpdate();
  };

  render() {
    const content = typeof this.props.content === 'function' ? this.props.content() : this.props.content;

    const { children, zIndex = 0 } = this.props;

    return (
      <>
        {children(this.handleChildRef)}

        {ReactDOM.createPortal(
          <Wrapper
            pose={this.props.isOpened ? 'visible' : 'hidden'}
            width={this.props.width}
            top={this.top}
            left={this.left}
            zIndex={zIndex}
          >
            <OutsideClickHandler onOutsideClick={this.props.onOutsideClick} disabled={!this.props.isOpened}>
              {content}
            </OutsideClickHandler>
          </Wrapper>,
          document.body,
        )}
      </>
    );
  }
}

export default Dropdown;
