import { MessageText, MessageWrapper } from './BalanceMessage.styled';

const BalanceMessage = () => {
  return (
    <MessageWrapper>
      <MessageText>
        Hello! To get started, enter the current balance of your account!
      </MessageText>
      <MessageText>You can`t spend money until you have it:)</MessageText>
    </MessageWrapper>
  );
};

export default BalanceMessage;
