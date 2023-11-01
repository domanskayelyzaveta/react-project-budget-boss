import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Ballance from 'components/Ballance/Ballance';
import sprite from '../../images/sprite.svg';
import { requestPeriodData } from 'redux/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/selectors';

const PeriodSwitch = () => {
  const [Period, setPeriod] = useState(new Date());
  const location = useLocation();
  const backLinkRef = useRef(location?.state?.from ?? '/dashboard');
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const handlePrevMonthClick = () => {
    const newDate = new Date(Period);
    newDate.setMonth(newDate.getMonth() - 1);
    setPeriod(newDate);
    dispatch(requestPeriodData({ newDate, token }));
  };

  const handleNextMonthClick = () => {
    const newDate = new Date(Period);
    newDate.setMonth(newDate.getMonth() + 1);
    setPeriod(newDate);
    dispatch(requestPeriodData({ newDate, token }));
  };

  return (
    <div>
      <Link to={backLinkRef.current}>Main page</Link>
      <div>
        <h2>Balance:</h2>
        <Ballance />
      </div>
      <div>
        <h3>Current period:</h3>
        <div>
          <button onClick={handlePrevMonthClick}>
            <svg width="16" height="16">
              <use href={`${sprite}#arrow-toleft`} />
            </svg>
          </button>
          <div>
            {Period.getFullYear()}-{Period.getMonth() + 1}
          </div>
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
