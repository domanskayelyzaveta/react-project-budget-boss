import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Ballance from 'components/Ballance/Ballance';
import sprite from '../../images/sprite.svg';
import { requestPeriodData } from 'redux/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/selectors';

const PeriodSwitch = () => {
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const location = useLocation();
  const backLinkRef = useRef(location?.state?.from ?? '/dashboard');
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const formatPeriod = date => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      '0'
    )}`;
  };
  console.log(formatPeriod(currentDate));

  const handlePrevMonthClick = () => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setSelectedDate(newDate);
    const result = formatPeriod(newDate);
    dispatch(requestPeriodData({ date: result, token }));
  };

  const handleNextMonthClick = () => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setSelectedDate(newDate);
    const result = formatPeriod(newDate);
    dispatch(requestPeriodData({ date: result, token }));
  };

  return (
    <div>
      <Link to={backLinkRef.current}>Main page</Link>
      <Ballance />
      <div>
        <h3>Current period:</h3>
        <div>
          <button onClick={handlePrevMonthClick}>
            <svg width="16" height="16">
              <use href={`${sprite}#arrow-toleft`} />
            </svg>
          </button>
          <div>{formatPeriod(selectedDate)}</div>
          <button onClick={handleNextMonthClick}>
            <svg width="16" height="16">
              <use href={`${sprite}#arrow-toright`} />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeriodSwitch;
