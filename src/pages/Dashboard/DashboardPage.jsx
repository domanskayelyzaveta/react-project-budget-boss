import { Tabs } from 'antd';
import Ballance from 'components/Ballance/Ballance';
import DashboardForm from 'components/DashboardForm/DashboardForm';
import DashboardSummary from 'components/DashboardSummary/DashboardSummary';
import DashboardTable from 'components/DashboardTable/DashboardTable';
import { useEffect, useState } from 'react';
import { DataWrapper, IncomeWrapper } from './DashboardPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { requestExpenseCategories, requestIncomeCategories } from 'redux/thunks';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('1');

  const dispatch = useDispatch();
  const token = useSelector(state => state.user.accessToken);

  useEffect(() => {
    dispatch(requestIncomeCategories(token));
    dispatch(requestExpenseCategories(token));
  }, [dispatch, token]);

  const incomeCategoriesList = useSelector(state => state.categories.incomeCategories);
  const expenseCategoriesList = useSelector(state => state.categories.expenseCategories);

  console.log(incomeCategoriesList)
  console.log(expenseCategoriesList)

  const items = [
    {
      key: "1",
      label: 'EXPENSES',
      children: (
        <>
          <Ballance />
          <DashboardForm categoriesList={expenseCategoriesList}/>
          <DataWrapper>
            <DashboardTable />
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
            <DashboardForm categoriesList={incomeCategoriesList}/>
            <DataWrapper>
              <DashboardTable />
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
