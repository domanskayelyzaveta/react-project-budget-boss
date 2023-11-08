import { Tabs } from 'antd';
import Ballance from 'components/Ballance/Ballance';
import DashboardForm from 'components/DashboardForm/DashboardForm';
import DashboardSummary from 'components/DashboardSummary/DashboardSummary';
import DashboardTable from 'components/DashboardTable/DashboardTable';
import IconWithButton from 'components/IconWithButton/IconWithButton';
import DashboardPageMobile from 'pages/DashboardPageMobile/DashboardPageMobile';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import {
  selectExpenseList_,
  selectExpensesSummary_,
  selectIncomeList_,
  selectIncomeSummary_,
  selectToken,
} from 'redux/selectors';
import {
  getExpensesTransactionsThunk,
  getIncomeTransactionsThunk,
  requestExpenseCategoriesThunk,
  requestIncomeCategoriesThunk,
} from 'redux/thunks';
import {
  DataWrapper,
  ExpensesWrapper,
  IncomeWrapper,
  StyledBalanceWrapper,
  StyledLinkWrapper,
  StyledTop,
  TabsWrapper,
} from './DashboardPage.styled';
import './Tabs.css';
// import Calculator from 'components/Calculator/Calculator';

const Dashboard = () => {
  const isTabletAndDestop = useMediaQuery({ query: '(min-width: 768px)' });
  const isMobail = useMediaQuery({ query: '(max-width: 767px)' });
  const [activeTab, setActiveTab] = useState('1');
  const expensesList = useSelector(selectExpenseList_);
  const incomeList = useSelector(selectIncomeList_);
  const expensesSummary = useSelector(selectExpensesSummary_);
  const incomeSummary = useSelector(selectIncomeSummary_);
  const token = useSelector(selectToken);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestIncomeCategoriesThunk(token));
    dispatch(requestExpenseCategoriesThunk(token));
    dispatch(getIncomeTransactionsThunk('income'));
    dispatch(getExpensesTransactionsThunk('expense'));
  }, [dispatch, token]);

  const incomeCategoriesList = useSelector(
    state => state.categories.incomeCategories
  );
  const expenseCategoriesList = useSelector(
    state => state.categories.expenseCategories
  );

  const items = [
    {
      key: '1',
      label: 'EXPENSES',
      children: (
        <>
          <ExpensesWrapper>
            <DashboardForm
              categoriesList={expenseCategoriesList}
              category={'expense'}
            />
            <DataWrapper>
              <DashboardTable data={expensesList} category={'expense'} />
              {expensesSummary && <DashboardSummary data={expensesSummary} />}
            </DataWrapper>
          </ExpensesWrapper>
        </>
      ),
    },
    {
      key: '2',
      label: 'INCOME',
      children: (
        <>
          <IncomeWrapper>
            <DashboardForm
              categoriesList={incomeCategoriesList}
              category={'income'}
            />
            <DataWrapper>
              <DashboardTable data={incomeList} category={'income'} />
              {incomeSummary && <DashboardSummary data={incomeSummary} />}
            </DataWrapper>
          </IncomeWrapper>
        </>
      ),
    },
  ];

  return (
    <>
      {isMobail && <DashboardPageMobile />}
      {isTabletAndDestop && (
        <TabsWrapper>
          <StyledTop>
            <StyledBalanceWrapper>
              <Ballance />
            </StyledBalanceWrapper>
            <StyledLinkWrapper>
              <Link to="/reports">
                <IconWithButton iconName={'#icon-bar_chart-24px'} />
              </Link>
            </StyledLinkWrapper>
          </StyledTop>
          {/* <Calculator/> */}
          <Tabs
            className="custom-tabs"
            activeKey={activeTab}
            onChange={key => {
              setActiveTab(key);
            }}
            defaultActiveKey="1"
            items={items}
          />
        </TabsWrapper>
      )}
    </>
  );
};

export default Dashboard;
