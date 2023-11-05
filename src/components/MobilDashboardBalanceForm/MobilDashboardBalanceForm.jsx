import DashboardBalanceForm from 'components/DashboardBalanceForm/DashboardBalanceForm';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  BalanceWrapperMobil,
  MobileDashboardBalanceFormWrapper,
  ReportAndStatisticsWrapper,
  StyledAddTransactionButton,
  StyledAddTransactionButtonIcon,
  StyledAddTransactionButtonText,
} from './MobilDashboardBalanceForm.styled';
import { StyledLinkWrapper } from 'pages/Dashboard/DashboardPage.styled';
import { Link } from 'react-router-dom';
import IconWithButton from 'components/IconWithButton/IconWithButton';
import StyledDatepicker from 'components/DatePicker/StyledDatepicker';
import { setSelectedDate_ } from 'redux/userReducer';
import Modal from 'components/Modal/Modal';

const MobileDashboardBalanceForm = ({ categoriesList }) => {
  const balance = useSelector(state => state.user.balance);
  const [category, setCategory] = useState('expenses');

  const [
    isOpenAddTransactionModalExpense,
    setIsOpenAddTransactionModalExpense,
  ] = useState(false);

  const [isOpenAddTransactionModalIncome, setIsOpenAddTransactionModalIncome] =
    useState(false);
  const selectedDate = useSelector(state => state.user.selectedDate);
  const dispatch = useDispatch();

  const handleModalOpen = category => {
    category === 'expense'
      ? setIsOpenAddTransactionModalExpense(!isOpenAddTransactionModalExpense)
      : setIsOpenAddTransactionModalIncome(!isOpenAddTransactionModalIncome);
  };

  const handleChange = dateChange => {
    dispatch(setSelectedDate_(dateChange));
  };

  const handleChangePage = category => {
    setCategory(category);
  };

  return (
    <>
      <MobileDashboardBalanceFormWrapper>
        <StyledAddTransactionButton onClick={() => handleChange(category)}>
          <StyledAddTransactionButtonIcon />
          <StyledAddTransactionButtonText>
            Add transaction
          </StyledAddTransactionButtonText>
        </StyledAddTransactionButton>

        <StyledLinkWrapper>
          <Link to="/reports">
            <IconWithButton iconName={'#icon-bar_chart-24px'} />
          </Link>
        </StyledLinkWrapper>
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
        {/* <StyledDatepicker
          value={selectedDate}
          placeholderText="Select date"
          onClick={handleChange}
        /> */}
        {category === 'expenses' ? (
          <ul>
            <li>expense</li>
          </ul>
        ) : (
          <ul>
            <li>income</li>
          </ul>
        )}
        <div>
          <button
            onClick={() => {
              handleChangePage('expenses');
            }}
          >
            EXPENSES
          </button>
          <button
            onClick={() => {
              handleChangePage('income');
            }}
          >
            INCOME
          </button>
        </div>
      </MobileDashboardBalanceFormWrapper>

      {isOpenAddTransactionModalExpense && (
        <Modal
          children={<p>Are you sure?</p>}
          // incomeEvent={}
          onCloseModal={handleModalOpen}
        ></Modal>
      )}
    </>
  );
};

export default MobileDashboardBalanceForm;
