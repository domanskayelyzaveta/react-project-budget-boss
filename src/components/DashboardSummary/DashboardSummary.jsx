// import React, { useEffect, useState } from 'react';
// import { StyledSummaryHeader, StyledSummaryItem, StyledSummaryList, SummaryWrapper } from './DashboardSummary.styled';
// // import { useSelector } from 'react-redux';

// const DashboardSummary = ({ data }) => {
//   // const expensesSummary = useSelector(state => state.expenses.monthsStats);
//   // const incomeSummary = useSelector(state => state.income.monthsStats);
//   const [listItems, setListItems] = useState([]);

//   useEffect(() => {
//     const items = Object.entries(data).map(([month, value]) => (
//       <StyledSummaryItem key={month}>
//         {month}: {value === 'N/A' ? 0 : value}
//       </StyledSummaryItem>
//     ));
//     setListItems(items);
//   }, [data]);

//   return (
//     <SummaryWrapper>
//       <StyledSummaryHeader>Summary</StyledSummaryHeader>
//       <StyledSummaryList>{listItems}</StyledSummaryList>
//     </SummaryWrapper>
//   );
// };

// export default DashboardSummary;

import React, { useEffect, useState } from 'react';
import {
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
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const currentMonth = months[currentMonthIndex];

    if (currentMonthIndex === -1) {
      return; // Если текущий месяц не найден в данных, выход
    }

    const relevantMonths = months.slice(0, currentMonthIndex + 1);
    const items = relevantMonths
      .map(month => (
        <StyledSummaryItem key={month}>
          {month}: {data[month] === 'N/A' ? 0 : data[month]}
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
