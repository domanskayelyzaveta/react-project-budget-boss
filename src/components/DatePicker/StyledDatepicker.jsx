import { forwardRef, useState } from 'react';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import sprite from '../../images/sprite.svg';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import {
  CalcWrapper,
  CalendarGlobalStyles,
  TitleWrapper,
} from './StyledDatePicker.styled';

const StyledDatepicker = () => {
  const [selectedDate, setSelectedDate] = useState(Date.now());

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <TitleWrapper onClick={onClick} ref={ref}>
        {format(selectedDate, 'dd.MM.yyyy')}
      </TitleWrapper>
    );
  });

  return (
    <>
      <CalcWrapper>
        <div>
          <svg width="20" height="20">
            <use href={`${sprite}#icon-calendar`} />
          </svg>
        </div>
        <div>
          <DatePicker
            selected={selectedDate}
            onChange={date => {
              // console.log(date)
              setSelectedDate(date);
            }}
            customInput={<CustomInput />}
            dateFormat={'dd MM yyyy'}
            calendarStartDay={1}
            formatWeekDay={day => day.substr(0, 1)}
          />
        </div>
      </CalcWrapper>
      <CalendarGlobalStyles />
    </>
  );
};

export default StyledDatepicker;
