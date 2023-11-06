import DashboardBalanceForm from 'components/DashboardBalanceForm/DashboardBalanceForm';
import { useSelector } from 'react-redux';
import notification from '../../images/balance-notification.webp';
import { BalanceWrapper, StyledBalanceAmount } from './Balance.styled';
import {
  Img,
  ImgWrapper,
  InitialBalanceWrapper,
  ParagraphNotif,
  ParagraphNotific,
} from './BalanceMessage.styled';
import { selectBalance, selectTransaction } from 'redux/selectors';

const Ballance = () => {
  const transaction = useSelector(selectTransaction);
  const balance = useSelector(selectBalance);

  return (
    <BalanceWrapper>
      Ballance:
      {!transaction?.length && balance === 0 ? (
        <InitialBalanceWrapper>
          <DashboardBalanceForm />
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
      ) : (
        <StyledBalanceAmount>{balance?.toFixed(2)} UAH</StyledBalanceAmount>
      )}
    </BalanceWrapper>
  );
};

export default Ballance;
