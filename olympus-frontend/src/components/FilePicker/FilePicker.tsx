import React from 'react';
import { HiddenInput } from './FilePicker.styles';

export enum FilePickerAccept {
  ANY = '*',
  IMAGES = '.png, .jpg, .jpeg',
}

interface IFilePickerProps {
  accept?: FilePickerAccept;
  onFilesSelect: (files: File[]) => void;
}

// eslint-disable-next-line react/display-name
const FilePicker = React.forwardRef<HTMLInputElement, IFilePickerProps>(
  (props: IFilePickerProps, ref?: React.Ref<HTMLInputElement>) => {
    const { accept = FilePickerAccept.ANY } = props;

    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
      if (event.currentTarget.files) {
        const files = [];

        for (let i = 0; i < event.currentTarget.files.length; i++) {
          files.push(event.currentTarget.files[i]);
        }

        props.onFilesSelect(files);
      }

      event.currentTarget.value = '';
    };

    return <HiddenInput ref={ref} accept={accept} type={'file'} onChange={onChange} />;
  },
);

export { FilePicker };
