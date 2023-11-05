import DashboardBalanceForm from 'components/DashboardBalanceForm/DashboardBalanceForm';
import DashboardFormMobile from 'components/DashboardFormMobile/DahboardFormMobile';
import StyledDatepicker from 'components/DatePicker/StyledDatepicker';
import IconWithButton from 'components/IconWithButton/IconWithButton';
import ModalMobile from 'components/ModalMobile/ModalMobile';
import { StyledLinkWrapper } from 'pages/Dashboard/DashboardPage.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSelectedDate_ } from 'redux/userReducer';
import { StyledBalanceAmount } from '../../components/Ballance/Balance.styled';
import {
  Img,
  ImgWrapper,
  InitialBalanceWrapper,
  ParagraphNotif,
  ParagraphNotific,
} from '../../components/Ballance/BalanceMessage.styled';
import MobileTransactionList from '../../components/MobileTransactionList/MobileTransactionList';
import {
  BalanceWrapperMobil,
  MobileDashboardBalanceFormWrapper,
  StyledAddTransactionButton,
  StyledAddTransactionButtonIcon,
  StyledAddTransactionButtonText,
} from './DashboardPageMobile.styled';
import {
  getExpensesTransactionsThunk,
  getIncomeTransactionsThunk,
} from 'redux/thunks';

const DashboardPageMobile = () => {
  const balance = useSelector(state => state.user.balance);
  const [category, setCategory] = useState('expense');

  const [
    isOpenAddTransactionModalExpense,
    setIsOpenAddTransactionModalExpense,
  ] = useState(false);

  const [isOpenAddTransactionModalIncome, setIsOpenAddTransactionModalIncome] =
    useState(false);
  const selectedDate = useSelector(state => state.user.selectedDate);
  // const selectedDate = useSelector(state => parseISO(state.user.selectedDate));
  // const selectedDate = new Date(selectedISODate);
  // const selectedDate = new Date(selectedISODate);

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
    category === 'expense'
      ? dispatch(getExpensesTransactionsThunk(category))
      : dispatch(getIncomeTransactionsThunk(category));
  };

  return (
    <>
      {!isOpenAddTransactionModalExpense &&
        !isOpenAddTransactionModalIncome && (
          <MobileDashboardBalanceFormWrapper>
            <StyledAddTransactionButton
              onClick={() => handleModalOpen(category)}
            >
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
                <StyledBalanceAmount>
                  {balance?.toFixed(2)} UAH
                </StyledBalanceAmount>
              )}
            </BalanceWrapperMobil>
            <StyledDatepicker
              value={selectedDate}
              placeholderText="Select date"
              onClick={handleChange}
            />
            <ul>
              <MobileTransactionList category={category} />
            </ul>

            <div>
              <button
                onClick={() => {
                  handleChangePage('expense');
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
        )}
      {(isOpenAddTransactionModalExpense ||
        isOpenAddTransactionModalIncome) && (
        <ModalMobile
          children={
            <DashboardFormMobile
              category={category}
              onCloseModal={handleModalOpen}
            />
          }
          incomeEvent={category}
          onCloseModal={handleModalOpen}
        ></ModalMobile>
      )}
    </>
  );
};

export default DashboardPageMobile;
