import React from 'react';
import { Dropdown } from '../Dropdown';
import ReactDatePicker from 'react-datepicker';
import { Wrapper, FormattedDate, ReactDatePickerWrapper, Placeholder, IconWrapper } from './DatePicker.styles';
import { subYears } from 'date-fns';
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
  maxDate?: Date;
};

class DatePicker extends React.Component<TProps, TState> {
  minDate: Date;

  constructor(props: TProps) {
    super(props);

    this.state = {
      isOpened: false,
    };

    this.minDate = subYears(new Date(), 100);
  }

  renderContent = () => {
    const { date, showYearDropdown = false, maxDate = new Date() } = this.props;

    const dateFormatCalendar = showYearDropdown ? 'LLLL' : 'LLLL yyyy';

    return (
      <ReactDatePickerWrapper>
        <ReactDatePicker
          locale={datePickerLocale()}
          selected={date}
          onChange={this.onChange}
          inline={true}
          showYearDropdown={showYearDropdown}
          dropdownMode="select"
          dateFormatCalendar={dateFormatCalendar}
          minDate={this.minDate}
          maxDate={maxDate}
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
        {date ? (
          <FormattedDate>{formatDate(date, dateFormat)}</FormattedDate>
        ) : (
          <Placeholder>{placeholder}</Placeholder>
        )}

        <Dropdown isOpened={this.state.isOpened} content={this.renderContent} onOutsideClick={this.onClose} width={240}>
          <IconWrapper>
            <FiCalendar color={'#a0a5c3'} />
          </IconWrapper>
        </Dropdown>
      </Wrapper>
    );
  }
}

export { DatePicker };
