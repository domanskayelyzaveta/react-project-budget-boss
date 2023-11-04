import DashboardBalanceForm from 'components/DashboardBalanceForm/DashboardBalanceForm';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BalanceWrapper, StyledBalanceAmount } from './Balance.styled';
import BalanceMessage from './BalanceMessage';
import { InitialBalanceWrapper } from './BalanceMessage.styled';

const Ballance = () => {
  const balance = useSelector(state => state.user.balance);

  useEffect(() => {
    if (balance) {
      console.log(balance);
    }
  }, [balance]);
  return (
    <BalanceWrapper>
      Ballance:
      {!balance && (
        <InitialBalanceWrapper>
          <DashboardBalanceForm />
          <BalanceMessage />
        </InitialBalanceWrapper>
      )}
      {balance && (
        <StyledBalanceAmount>{balance?.toFixed(2)} UAH</StyledBalanceAmount>
      )}
    </BalanceWrapper>
  );
};

export default Ballance;
