import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Ballance from 'components/Ballance/Ballance';
import sprite from '../../images/sprite.svg';
import { requestPeriodData } from 'redux/thunks';
import { useDispatch } from 'react-redux';
import {
  Back,
  BackBtn,
  BackText,
  Container,
  MobileWrapPeriod,
  Period,
  PeriodArrow,
  PeriodBtn,
  PeriodText,
  PeriodTitle,
} from './PeriodSwitch.styled';
import { useEffect } from 'react';

const PeriodSwitch = () => {
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const location = useLocation();
  const backLinkRef = useRef(location?.state?.from ?? '/dashboard');
  const dispatch = useDispatch();
  const getMonthName = month => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[month];
  };

  const formatData = date => {
    const year = date.getFullYear();
    const month = getMonthName(date.getMonth()).toUpperCase();
    return `${month} ${year}`;
  };

  const formatPeriod = date => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      '0'
    )}`;
  };

  useEffect(() => {
    const newDate = new Date();
    newDate.setMonth(newDate.getMonth());
    const periodData = formatPeriod(newDate);
    dispatch(requestPeriodData(periodData));
  }, [dispatch]);

  const handlePrevMonthClick = () => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setSelectedDate(newDate);
    const periodData = formatPeriod(newDate);
    dispatch(requestPeriodData(periodData));
  };

  const handleNextMonthClick = () => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() + 1);
    if (newDate <= currentDate) {
      setSelectedDate(newDate);
      const periodData = formatPeriod(newDate);
      dispatch(requestPeriodData(periodData));
    }
  };

  return (
    <Container>
      <BackBtn to={backLinkRef.current}>
        <Back width="24" height="24">
          <use href={`${sprite}#icon-keyboard_backspace-24px`} />
        </Back>
        <BackText>Main page</BackText>
      </BackBtn>
      <>
        <Ballance />
        <MobileWrapPeriod>
          <PeriodTitle>Current period:</PeriodTitle>
          <Period>
            <PeriodBtn onClick={handlePrevMonthClick}>
              <PeriodArrow width="15" height="15">
                <use href={`${sprite}#arrow-toleft`} />
              </PeriodArrow>
            </PeriodBtn>
            <PeriodText>{formatData(selectedDate)}</PeriodText>
            <PeriodBtn onClick={handleNextMonthClick}>
              <PeriodArrow width="15" height="15">
                <use href={`${sprite}#arrow-toright`} />
              </PeriodArrow>
            </PeriodBtn>
          </Period>
        </MobileWrapPeriod>
      </>
    </Container>
  );
};

export default PeriodSwitch;
