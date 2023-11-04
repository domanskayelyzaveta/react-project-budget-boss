import DashboardBalanceForm from 'components/DashboardBalanceForm/DashboardBalanceForm';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BalanceWrapper, StyledBalanceAmount } from './Balance.styled';
import BalanceMessage from './BalanceMessage';

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
        <>
          <DashboardBalanceForm />
          <BalanceMessage />
        </>
      )}
      {balance && (
        <StyledBalanceAmount>{balance?.toFixed(2)} UAH</StyledBalanceAmount>
      )}
    </BalanceWrapper>
  );
};

export default Ballance;
