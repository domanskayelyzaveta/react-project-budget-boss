import DashboardBalanceForm from 'components/DashboardBalanceForm/DashboardBalanceForm';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BalanceWrapper, StyledBalanceAmount } from './Balance.styled';
import BalanceMessage from './BalanceMessage';
import {
  Img,
  ImgWrapper,
  InitialBalanceWrapper,
  ParagraphNotif,
  ParagraphNotific,
} from './BalanceMessage.styled';
import notification from '../../images/balance-notification.webp';

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
          {/* <BalanceMessage /> */}
          <ImgWrapper>
            <Img src={notification} alt="notification" />
            <ParagraphNotif>
              Hello! To get started, enter the current balance of your account!
            </ParagraphNotif>
            <ParagraphNotific>
              You can`t spend money until you have it:)
            </ParagraphNotific>
          </ImgWrapper>
        </InitialBalanceWrapper>
      )}
      {balance ? (
        <StyledBalanceAmount>{balance?.toFixed(2)} UAH</StyledBalanceAmount>
      ) : null}
    </BalanceWrapper>
  );
};

export default Ballance;
