import { Tabs } from 'antd';
import Ballance from 'components/Ballance/Ballance';
import DashboardForm from 'components/DashboardForm/DashboardForm';
import DashboardSummary from 'components/DashboardSummary/DashboardSummary';
import DashboardTable from 'components/DashboardTable/DashboardTable';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExpensesTransactionsThunk, getIncomeTransactionsThunk, requestExpenseCategoriesThunk, requestIncomeCategoriesThunk } from 'redux/thunks';
import { DataWrapper, IncomeWrapper } from './DashboardPage.styled';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('1');

  const dispatch = useDispatch();
  const token = useSelector(state => state.user.accessToken);
  // const totalIncomeList = useSelector(state => state.user.accessToken);
  // const totalExpensesList = useSelector(state => state.user.accessToken);

  useEffect(() => {
    dispatch(requestIncomeCategoriesThunk(token));
    dispatch(requestExpenseCategoriesThunk(token));
    dispatch(getIncomeTransactionsThunk('income'))
    dispatch(getExpensesTransactionsThunk('expense'))
  }, [dispatch, token]);

  const incomeCategoriesList = useSelector(state => state.categories.incomeCategories);
  const expenseCategoriesList = useSelector(state => state.categories.expenseCategories);


  const items = [
    {
      key: "1",
      label: 'EXPENSES',
      children: (
        <>
          <Ballance />
          <DashboardForm categoriesList={expenseCategoriesList} category={'expense'}/>
          <DataWrapper>
            <DashboardTable category={'expense'}/>
            <DashboardSummary />
          </DataWrapper>
        </>
      ),
    },
    {
      key: "2",
      label: 'INCOME',
      children: (
        <>
          <Ballance />
          <IncomeWrapper>
            <DashboardForm categoriesList={incomeCategoriesList} category={'income'}/>
            <DataWrapper>
              <DashboardTable category={'income'} />
              <DashboardSummary />
            </DataWrapper>
          </IncomeWrapper>
        </>
      ),
    },
  ];

  return <Tabs activeKey={activeTab}
  onChange={(key) => {setActiveTab(key); console.log(key)}} defaultActiveKey="1" items={items} />;
};

export default Dashboard;
