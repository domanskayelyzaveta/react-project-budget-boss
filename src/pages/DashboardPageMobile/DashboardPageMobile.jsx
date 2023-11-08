import DashboardBalanceForm from 'components/DashboardBalanceForm/DashboardBalanceForm';
import DashboardFormMobile from 'components/DashboardFormMobile/DahboardFormMobile';
import StyledDatepicker from 'components/DatePicker/StyledDatepicker';
import IconWithButton from 'components/IconWithButton/IconWithButton';
import ModalMobile from 'components/ModalMobile/ModalMobile';
import { StyledLinkWrapper } from 'pages/Dashboard/DashboardPage.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectBalance, selectDate, selectTransaction } from 'redux/selectors';
import {
  getExpensesTransactionsThunk,
  getIncomeTransactionsThunk,
} from 'redux/thunks';
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
import notification from '../../images/balance-notification.webp';
import sprite from '../../images/sprite.svg';
import {
  BalanceWrapperMobil,
  DatePickerWrapper,
  MobileDashboardBalanceFormWrapper,
  StyledAddTransactionButton,
  StyledAddTransactionButtonIcon,
  StyledAddTransactionButtonText,
  StyledBottom,
  StyledButtonDiv,
  StyledMobileButton,
  StyledPlusSvg,
  StyledSpan,
  StyledUl,
  TransactionMobileListWrapper,
} from './DashboardPageMobile.styled';

const DashboardPageMobile = () => {
  const balance = useSelector(selectBalance);
  const transaction = useSelector(selectTransaction);
  const [category, setCategory] = useState('expense');

  const [
    isOpenAddTransactionModalExpense,
    setIsOpenAddTransactionModalExpense,
  ] = useState(false);

  const [isOpenAddTransactionModalIncome, setIsOpenAddTransactionModalIncome] =
    useState(false);
  const selectedDate = useSelector(selectDate);
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
              <StyledSpan>
                <StyledPlusSvg width="20" height="20">
                  <use href={`${sprite}#icon-plus`} />
                </StyledPlusSvg>
              </StyledSpan>
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
              {!transaction?.length && balance === 0 ? (
                <InitialBalanceWrapper>
                  <DashboardBalanceForm />
                  <ImgWrapper>
                    <Img src={notification} alt="notification" />
                    <ParagraphNotif>
                      Hello! To get started, enter the current balance of your
                      account!
                    </ParagraphNotif>
                    <ParagraphNotific>
                      You can`t spend money until you have it:)
                    </ParagraphNotific>
                  </ImgWrapper>
                </InitialBalanceWrapper>
              ) : (
                <StyledBalanceAmount>
                  {balance?.toFixed(2)} UAH
                </StyledBalanceAmount>
              )}
            </BalanceWrapperMobil>
            <DatePickerWrapper>
              <StyledDatepicker
                value={selectedDate}
                placeholderText="Select date"
                onClick={handleChange}
              />
            </DatePickerWrapper>
            <StyledBottom>
              <TransactionMobileListWrapper>
                <StyledUl>
                  <MobileTransactionList category={category} />
                </StyledUl>
              </TransactionMobileListWrapper>
              <StyledButtonDiv>
                <StyledMobileButton
                  onClick={() => {
                    handleChangePage('expense');
                  }}
                  $active={category === 'expense'}
                  $name={'expense'}
                >
                  EXPENSES
                </StyledMobileButton>
                <StyledMobileButton
                  onClick={() => {
                    handleChangePage('income');
                  }}
                  $active={category === 'income'}
                  $name={'income'}
                >
                  INCOME
                </StyledMobileButton>
              </StyledButtonDiv>
            </StyledBottom>
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
