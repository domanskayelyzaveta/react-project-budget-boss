import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Ballance from 'components/Ballance/Ballance';

const PeriodSwitch = () => {
  const [Period, setPeriod] = useState(new Date());
  const location = useLocation();
  const backLinkRef = useRef(location?.state?.from ?? '/dashboard');

    const handlePrevMonthClick = () => {
      const newDate = new Date(Period);
      newDate.setMonth(newDate.getMonth() - 1);
      setPeriod(newDate);
    };

    const handleNextMonthClick = () => {
      const newDate = new Date(Period);
      newDate.setMonth(newDate.getMonth() + 1);
      setPeriod(newDate);
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
          <button id="prevMonthButton" onClick={handlePrevMonthClick}>
            -
          </button>
          <div id="Period">
            {Period.getFullYear()}-{Period.getMonth() + 1}
          </div>
          <button id="nextMonthButton" onClick={handleNextMonthClick}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeriodSwitch;
