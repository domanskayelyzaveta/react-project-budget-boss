import DashboardBalanceForm from 'components/DashboardBalanceForm/DashboardBalanceForm';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  BalanceWrapper,
  StyledBalanceAmount,
} from '../Ballance/Balance.styled';
import {
  Img,
  ImgWrapper,
  InitialBalanceWrapper,
  ParagraphNotif,
  ParagraphNotific,
} from '../Ballance/BalanceMessage.styled';
import notification from '../../images/balance-notification.webp';
import {
  AddTransahtionWrapper,
  BalanceWrapperMobil,
  MobilDashboardBalanceFormWrapper,
  ReportAndStatiskWrapper,
} from './MobilDashboardBalanceForm.styled';

const MobilDashboardBalanceForm = () => {
  const balance = useSelector(state => state.user.balance);

  useEffect(() => {
    if (balance) {
      console.log(balance);
    }
  }, [balance]);
  return (
    <MobilDashboardBalanceFormWrapper>
      <AddTransahtionWrapper>
        <button>ADD TRANSACTION</button>
      </AddTransahtionWrapper>
      <ReportAndStatiskWrapper>
        <button>Reports</button>
        <button>StatistikSVG</button>
      </ReportAndStatiskWrapper>
      <BalanceWrapperMobil>
        Ballance:
        {!balance && (
          <InitialBalanceWrapper>
            <DashboardBalanceForm />
            {/* <ImgWrapper>
              <Img src={notification} alt="notification" />
              <ParagraphNotif>
                Hello! To get started, enter the current balance of your
                account!
              </ParagraphNotif>
              <ParagraphNotific>
                You can`t spend money until you have it:)
              </ParagraphNotific>
            </ImgWrapper> */}
          </InitialBalanceWrapper>
        )}
        {balance && (
          <StyledBalanceAmount>{balance?.toFixed(2)} UAH</StyledBalanceAmount>
        )}
      </BalanceWrapperMobil>
      {/* dataPikker */}
      <div>
        <button>EXPENSES</button>
        <button>INCOME</button>
      </div>
    </MobilDashboardBalanceFormWrapper>
  );
};

export default MobilDashboardBalanceForm;
