import React from 'react';
import { Dropdown } from '../Dropdown';
import ReactDatePicker from 'react-datepicker';
import { Wrapper, Date, ReactDatePickerWrapper, Placeholder, IconWrapper } from './DatePicker.styles';

import { datePickerLocale, formatDate } from '../../i18n';
import { FiCalendar } from 'react-icons/fi';

type TState = {
  isOpened: boolean;
};

type TProps = {
  date: Date | null;
  onChange: (date: Date) => void;
  showYearDropdown?: boolean;
  dateFormat?: string;
  placeholder?: string;
};

class DatePicker extends React.Component<TProps, TState> {
  constructor(props: TProps) {
    super(props);

    this.state = {
      isOpened: false,
    };
  }

  renderContent = () => {
    const { date, showYearDropdown = false } = this.props;

    return (
      <ReactDatePickerWrapper>
        <ReactDatePicker
          locale={datePickerLocale()}
          selected={date}
          onChange={this.onChange}
          inline={true}
          showYearDropdown={showYearDropdown}
          dropdownMode="select"
        />
      </ReactDatePickerWrapper>
    );
  };

  onChange = (date: Date, event: React.SyntheticEvent) => {
    event.stopPropagation();

    this.props.onChange(date);
    this.onClose();
  };

  onOpen = () => {
    this.setState({ isOpened: true });
  };

  onClose = () => {
    this.setState({ isOpened: false });
  };

  render() {
    const { date, dateFormat = 'dd MMM, yyyy', placeholder = '' } = this.props;

    return (
      <Wrapper onClick={this.onOpen}>
        {date ? <Date>{formatDate(date, dateFormat)}</Date> : <Placeholder>{placeholder}</Placeholder>}

        <Dropdown isOpened={this.state.isOpened} content={this.renderContent} onOutsideClick={this.onClose} width={240}>
          {(handleRef: any) => (
            <IconWrapper ref={handleRef}>
              <FiCalendar color={'#a0a5c3'} />
            </IconWrapper>
          )}
        </Dropdown>
      </Wrapper>
    );
  }
}

export { DatePicker };
