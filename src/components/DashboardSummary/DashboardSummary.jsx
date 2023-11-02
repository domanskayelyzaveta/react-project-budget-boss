import React, { useEffect, useState } from 'react';
import { SummaryWrapper } from './DashboardSummary.styled';
// import { useSelector } from 'react-redux';

const DashboardSummary = ({ data }) => {
  // const expensesSummary = useSelector(state => state.expenses.monthsStats);
  // const incomeSummary = useSelector(state => state.income.monthsStats);
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    const items = Object.entries(data).map(([month, value]) => (
      <li key={month}>
        {month}: {value === 'N/A' ? 0 : value}
      </li>
    ));
    setListItems(items);
  }, [data]);

  return (
    <SummaryWrapper>
      <h3>Summary</h3>
      <ul>{listItems}</ul>
    </SummaryWrapper>
  );
};

export default DashboardSummary;
