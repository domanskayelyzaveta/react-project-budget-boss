import { forwardRef, useState } from "react";
import { format } from "date-fns";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { CalendarGlobalStyles, TitleWrapper } from "./StyledDatePicker.styled";

const StyledDatepicker = () => {
  const [selectedDate, setSelectedDate] = useState(Date.now());

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <TitleWrapper onClick={onClick} ref={ref}>
        {format(selectedDate, "dd-MM-yyyy")}
      </TitleWrapper>
    );
  });

  return (
    <>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          // console.log(date)
          setSelectedDate(date);
        }}
        customInput={<CustomInput />}
        dateFormat={"dd MM yyyy"}
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 1)}
      />
      <CalendarGlobalStyles />
    </>
  );
};

export default StyledDatepicker;
