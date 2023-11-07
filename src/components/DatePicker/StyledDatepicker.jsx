import { format } from 'date-fns';
import { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import sprite from '../../images/sprite.svg';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDate_ } from 'redux/userReducer';
import {
  CalendWrapper,
  CalendarGlobalStyles,
  TitleWrapper,
} from './StyledDatePicker.styled';
import { selectDate } from 'redux/selectors';

const StyledDatepicker = () => {
  // const [selectedDate, setSelectedDate] = useState(Date.now());
  const dispatch = useDispatch();
  const date = useSelector(selectDate);

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <TitleWrapper onClick={onClick} ref={ref}>
        {format(date, 'dd.MM.yyyy')}
      </TitleWrapper>
    );
  });

  return (
    <>
      <CalendWrapper>
        <div>
          <svg width="20" height="20">
            <use href={`${sprite}#icon-calendar`} />
          </svg>
        </div>
        <div>
          <DatePicker
            selected={date}
            onChange={date => {
              dispatch(setSelectedDate_(date));
            }}
            customInput={<CustomInput />}
            dateFormat={'dd MM yyyy'}
            calendarStartDay={1}
            formatWeekDay={day => day.substr(0, 1)}
          />
        </div>
      </CalendWrapper>
      <CalendarGlobalStyles />
    </>
  );
};

export default StyledDatepicker;
