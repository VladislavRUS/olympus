import React from 'react';
import { Modal } from '../Modal';
import { FormWrapper, ButtonsWrapper } from './EditModal.styles';
import { RegularButton } from '../RegularButton';
import { Spacer } from '../Spacer';
import { Loader } from '../Loader';

type ModalProps = React.ComponentProps<typeof Modal>;

interface IEditModalProps {
  cancelButtonText: string;
  onCancel: () => void;
  saveButtonText: string;
  onSave: () => void;
  isLoading?: boolean;
}

type Props = ModalProps & IEditModalProps;

class EditModal extends React.Component<Props> {
  onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    this.props.onSave();
  };

  render() {
    const {
      isOpened,
      title,
      onRequestClose,
      onCancel,
      cancelButtonText,
      saveButtonText,
      isLoading = false,
      children,
    } = this.props;

    return (
      <Modal isOpened={isOpened} onRequestClose={onRequestClose} title={title}>
        <FormWrapper onSubmit={this.onSubmit}>
          {children}
          <ButtonsWrapper>
            <RegularButton text={cancelButtonText} onClick={onCancel} />
            <Spacer width={20} />
            <RegularButton text={saveButtonText} type={'submit'} />
          </ButtonsWrapper>
        </FormWrapper>
        <Loader isVisible={isLoading} color={'#000'} />
      </Modal>
    );
  }
}

export { EditModal };
