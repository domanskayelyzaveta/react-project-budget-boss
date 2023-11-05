import { Tabs } from 'antd';
import Ballance from 'components/Ballance/Ballance';
import DashboardForm from 'components/DashboardForm/DashboardForm';
import DashboardSummary from 'components/DashboardSummary/DashboardSummary';
import DashboardTable from 'components/DashboardTable/DashboardTable';
import IconWithButton from 'components/IconWithButton/IconWithButton';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
} from './DashboardPage.styled';
import './Tabs.css';
import { useMediaQuery } from 'react-responsive';
// import Calculator from 'components/Calculator/Calculator';

const Dashboard = () => {
  const isTabletAndDestop = useMediaQuery({ query: '(min-width: 768px)' });
  const isMobail = useMediaQuery({ query: '(max-width: 767px)' });
  const [activeTab, setActiveTab] = useState('1');
  const expensesList = useSelector(state =>
    state.expenses.expenses?.toReversed()
  );
  const incomeList = useSelector(state => state.income.incomes?.toReversed());
  const expensesSummary = useSelector(state => state.expenses.monthsStats);
  const incomeSummary = useSelector(state => state.income.monthsStats);

  const dispatch = useDispatch();
  const token = useSelector(state => state.user.accessToken);

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
      {isMobail && (
        <h2
          style={{
            color: 'red',
            marginTop: '100px',
            border: '2px solid',
            padding: '10px',
          }}
        >
          There should be components for Mobile versions here.
        </h2>
      )}
      {isTabletAndDestop && (
        <div>
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
              console.log(key);
            }}
            defaultActiveKey="1"
            items={items}
          />
        </div>
      )}
    </>
  );
};

export default Dashboard;
