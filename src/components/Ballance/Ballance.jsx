import React from 'react';
import { useSelector } from 'react-redux';
import { BalanceWrapper, StyledBalanceAmount } from './Balance.styled';

const Ballance = () => {
  const balance = useSelector(state => state.user.balance);
  // let balanceToRender = balance
  // if (balance && Number.isInteger(balance)) {
  //   balanceToRender = balance.toFixed(2); // Добавляем ".00" и возвращаем форматированное число
  // } else {
  //   balanceToRender = balance.toString(); // Уже есть значения после запятой, просто преобразуем в строку
  // }

  return (
    <BalanceWrapper>
      Ballance: {' '}
      <StyledBalanceAmount>
       {balance?.toFixed(2)} UAH
      </StyledBalanceAmount>
    </BalanceWrapper>
  );
};

export default Ballance;
