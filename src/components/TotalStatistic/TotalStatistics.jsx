import React from 'react';
import { useSelector } from 'react-redux';
import { selectPeriodData } from 'redux/selectors';
import {
  Container,
  ExpenseText,
  ExpenseTotal,
  IncomeText,
  IncomeTotal,
  StatisticsWrapLeft,
  StatisticsWrapRight,
} from './TotalStatistics.styled';

const TotalStatistics = () => {
  const totalBalance = useSelector(selectPeriodData);

  const formatNumber = number => {
    return number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const expenseTotal =
    formatNumber(totalBalance?.expenses?.expenseTotal || 0) + ' UAH';
  const incomeTotal =
    formatNumber(totalBalance?.incomes?.incomeTotal || 0) + ' UAH';

  return (
    <Container>
      <StatisticsWrapLeft>
        <ExpenseText>Expenses:</ExpenseText>
        <ExpenseTotal>&#x2212;&#32;{expenseTotal}</ExpenseTotal>
      </StatisticsWrapLeft>
      <StatisticsWrapRight>
        <IncomeText>Income:</IncomeText>
        <IncomeTotal>&#x2b;&#32;{incomeTotal}</IncomeTotal>
      </StatisticsWrapRight>
    </Container>
  );
};

export default TotalStatistics;
