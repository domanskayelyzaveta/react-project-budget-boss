import React, { useEffect, useState } from 'react';
import { SummaryWrapper } from './DashboardSummary.styled';


const DashboardSummary = ({ data }) => {
  console.log(data)
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    const items = Object.entries(data).map(([month, value]) => (
      <li key={month}>
        {month}: {value}
      </li>
    ));
    setListItems(items);
  }, [data]);

  console.log(listItems)

  return (
    <SummaryWrapper>
      <h3>Summary</h3>
      <ul>
        {listItems}
      </ul>
    </SummaryWrapper>
  );
};

export default DashboardSummary;
