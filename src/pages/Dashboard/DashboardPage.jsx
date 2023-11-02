import { Tabs } from 'antd';
import Ballance from 'components/Ballance/Ballance';
import DashboardForm from 'components/DashboardForm/DashboardForm';
import DashboardSummary from 'components/DashboardSummary/DashboardSummary';
import DashboardTable from 'components/DashboardTable/DashboardTable';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getExpensesTransactionsThunk,
  getIncomeTransactionsThunk,
  requestExpenseCategoriesThunk,
  requestIncomeCategoriesThunk,
} from 'redux/thunks';
import {
  DataWrapper,
  IncomeWrapper,
  StyledBalanceWrapper,
  StyledLinkWrapper,
  StyledTop,
  StyledTopWrapper,
} from './DashboardPage.styled';
import { Link } from 'react-router-dom';
import IconWithButton from 'components/IconWithButton/IconWithButton';
import Calculator from 'components/Calculator/Calculator';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('1');
  const expensesList = useSelector(state => state.expenses.expenses);
  const incomeList = useSelector(state => state.income.incomes);
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
          <DashboardForm
            categoriesList={expenseCategoriesList}
            category={'expense'}
          />
          <DataWrapper>
            <DashboardTable data={expensesList} category={'expense'} />
            {expensesSummary && <DashboardSummary data={expensesSummary} />}
          </DataWrapper>
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
              <DashboardTable data={incomeList} category="income" />
              {incomeSummary && <DashboardSummary data={incomeSummary} />}
            </DataWrapper>
          </IncomeWrapper>
        </>
      ),
    },
  ];

  return (
    <>
      <StyledTop>
        <StyledBalanceWrapper>
          <Ballance />
        </StyledBalanceWrapper>
        <StyledLinkWrapper>
          <Link to="/reports">
            <IconWithButton />
          </Link>
        </StyledLinkWrapper>
      </StyledTop>
      {/* <Calculator/> */}
      <Tabs
        activeKey={activeTab}
        onChange={key => {
          setActiveTab(key);
          console.log(key);
        }}
        defaultActiveKey="1"
        items={items}
      />
    </>
  );
};

export default Dashboard;
