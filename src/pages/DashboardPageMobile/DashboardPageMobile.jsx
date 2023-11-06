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
import notification from '../../images/balance-notification.webp';
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
  StyledButtonDiv,
  StyledMobileButtonLeft,
  StyledMobileButtonRight,
  StyledPlusSvg,
  StyledSpan,
  StyledUl,
  TransactionMobileListWrapper,
} from './DashboardPageMobile.styled';
import {
  getExpensesTransactionsThunk,
  getIncomeTransactionsThunk,
} from 'redux/thunks';
import sprite from '../../images/sprite.svg';

const DashboardPageMobile = () => {
  const balance = useSelector(state => state.user.balance);
  const transaction = useSelector(state => state.user.userData?.transactions);
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
            <StyledDatepicker
              value={selectedDate}
              placeholderText="Select date"
              onClick={handleChange}
            />
            <TransactionMobileListWrapper>
              <StyledUl>
                <MobileTransactionList category={category} />
              </StyledUl>
            </TransactionMobileListWrapper>

            <StyledButtonDiv>
              <StyledMobileButtonLeft
                onClick={() => {
                  handleChangePage('expense');
                }}
              >
                EXPENSES
              </StyledMobileButtonLeft>
              <StyledMobileButtonRight
                onClick={() => {
                  handleChangePage('income');
                }}
              >
                INCOME
              </StyledMobileButtonRight>
            </StyledButtonDiv>
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
