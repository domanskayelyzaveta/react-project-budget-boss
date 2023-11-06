import React, { useEffect, useState } from 'react';
import {
  DataWrapper,
  StyledSummaryHeader,
  StyledSummaryItem,
  StyledSummaryList,
  SummaryWrapper,
} from './DashboardSummary.styled';

const DashboardSummary = ({ data }) => {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth();
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


    if (currentMonthIndex === -1) {
      return;
    }

    const relevantMonths = months.slice(0, currentMonthIndex + 1);
    const items = relevantMonths.map(month => (
      <StyledSummaryItem key={month}>
        <DataWrapper>
          <div>{month}</div>
          <div>{data[month] === 'N/A' ? '0.00' : data[month]?.toFixed(2)}</div>
        </DataWrapper>
      </StyledSummaryItem>
    ));

    setListItems(items.reverse());
  }, [data]);

  return (
    <SummaryWrapper>
      <StyledSummaryHeader>Summary</StyledSummaryHeader>
      <StyledSummaryList>{listItems}</StyledSummaryList>
    </SummaryWrapper>
  );
};

export default DashboardSummary;
