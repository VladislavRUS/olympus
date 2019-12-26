import React from 'react';
import { PoseGroup } from 'react-pose';
import { Overlay, Content, Header, Title, Body, CloseIconWrapper } from './Modal.styles';
import ReactDOM from 'react-dom';
import { FiX } from 'react-icons/fi';

interface IModalProps {
  isOpened: boolean;
  onRequestClose: () => void;
  title?: string;
  size?: ModalSize;
}

export enum ModalSize {
  BIG = 770,
  MEDIUM = 470,
}

const Modal: React.FC<IModalProps> = ({ isOpened, title = '', size = ModalSize.BIG, onRequestClose, children }) =>
  ReactDOM.createPortal(
    <PoseGroup>
      {isOpened ? (
        <Overlay key={'overlay'}>
          <Content key={'content'} size={size}>
            <CloseIconWrapper onClick={onRequestClose}>
              <FiX color={'#9a9fbf'} size={22} />
            </CloseIconWrapper>
            {title && (
              <Header>
                <Title>{title}</Title>
              </Header>
            )}
            <Body>{children}</Body>
          </Content>
        </Overlay>
      ) : (
        <React.Fragment key={'fragment'} />
      )}
    </PoseGroup>,
    document.body,
  );

export { Modal };
