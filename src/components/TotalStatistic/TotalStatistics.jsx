import React from 'react';
import { useSelector } from 'react-redux';
import { selectPeriodData } from 'redux/selectors';
import {
  Container,
  ExpenseTotal,
  IncomeTotal,
  StatisticsText,
  StatisticsWrap,
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
      <StatisticsWrap>
        <StatisticsText>Expenses:</StatisticsText>
        <ExpenseTotal>&#x2212;&#32;{expenseTotal}</ExpenseTotal>
      </StatisticsWrap>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2"
        height="70"
        viewBox="0 0 2 70"
        fill="none"
      >
        <path d="M1 0V70" stroke="#474759" />
      </svg>
      <StatisticsWrap>
        <StatisticsText>Income:</StatisticsText>
        <IncomeTotal>&#x2b;&#32;{incomeTotal}</IncomeTotal>
      </StatisticsWrap>
    </Container>
  );
};

export default TotalStatistics;
