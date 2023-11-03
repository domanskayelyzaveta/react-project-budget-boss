import React, { useEffect, useState } from 'react';
import { StyledSummaryHeader, StyledSummaryItem, StyledSummaryList, SummaryWrapper } from './DashboardSummary.styled';
// import { useSelector } from 'react-redux';

const DashboardSummary = ({ data }) => {
  // const expensesSummary = useSelector(state => state.expenses.monthsStats);
  // const incomeSummary = useSelector(state => state.income.monthsStats);
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    const items = Object.entries(data).map(([month, value]) => (
      <StyledSummaryItem key={month}>
        {month}: {value === 'N/A' ? 0 : value}
      </StyledSummaryItem>
    ));
    setListItems(items);
  }, [data]);

  return (
    <SummaryWrapper>
      <StyledSummaryHeader>Summary</StyledSummaryHeader>
      <StyledSummaryList>{listItems}</StyledSummaryList>
    </SummaryWrapper>
  );
};

export default DashboardSummary;
