import React from 'react';
import { SummaryWrapper } from './DashboardSummary.styled';


const DashboardSummary = () => {
  return (
    <SummaryWrapper>
      <h3>Summary</h3>
      <ul>
        <li>
          <div>
            <p>September</p>
            <p>1000</p>
          </div>
        </li>
        <li>
          <div>
            <p>November</p>
            <p>2000</p>
          </div>
        </li>
        <li>
          <div>
            <p>December</p>
            <p>3000</p>
          </div>
        </li>
        <li>
          <div>
            <p></p>
            <p></p>
          </div>
        </li>
      </ul>
    </SummaryWrapper>
  );
};

export default DashboardSummary;
