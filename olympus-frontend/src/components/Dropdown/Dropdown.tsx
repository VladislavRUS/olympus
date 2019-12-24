import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper } from './Dropdown.styles';
import OutsideClickHandler from 'react-outside-click-handler';

interface IDropdownProps {
  isOpened: boolean;
  content: () => React.ReactNode | React.ReactNode;
  onOutsideClick: () => void;
  width: number;
  children: (handleRef: (element: any) => void) => React.ReactNode;
}

class Dropdown extends React.Component<IDropdownProps> {
  childRef: any | null = null;
  left = 0;
  top = 0;

  handleChildRef = (element: any) => {
    this.childRef = element;
  };

  componentDidMount(): void {
    this.updatePosition();
  }

  componentDidUpdate(prevProps: Readonly<IDropdownProps>): void {
    if (!prevProps.isOpened && this.props.isOpened) {
      this.updatePosition();
      this.addEventListener();
    }

    if (!this.props.isOpened) {
      this.removeEventListener();
    }
  }

  addEventListener() {
    window.addEventListener('resize', this.updatePosition);
  }

  removeEventListener() {
    window.removeEventListener('resize', this.updatePosition);
  }

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

    const { children } = this.props;

    return (
      <>
        {children(this.handleChildRef)}

        {ReactDOM.createPortal(
          <Wrapper
            pose={this.props.isOpened ? 'visible' : 'hidden'}
            width={this.props.width}
            top={this.top}
            left={this.left}
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
