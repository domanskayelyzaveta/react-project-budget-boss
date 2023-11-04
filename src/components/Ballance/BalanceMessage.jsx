import React from 'react';
import { MessageWrapper } from './BalanceMessage.styled';

const BalanceMessage = () => {
  return (
    <MessageWrapper>
      <p>Hello! To get started, enter the current balance of your account!</p>
      <p>You can`t spend money until you have it:)</p>
    </MessageWrapper>
  );
};

export default BalanceMessage;
