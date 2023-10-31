import { Tabs } from 'antd';
import Ballance from 'components/Ballance/Ballance';
import DashboardForm from 'components/DashboardForm/DashboardForm';
import DashboardSummary from 'components/DashboardSummary/DashboardSummary';
import DashboardTable from 'components/DashboardTable/DashboardTable';

const Dashboard = () => {
  // const [size, setSize] = useState('small');
  // const onChange = e => {
  //   setSize(e.target.value);
  // };

  const items = [
    {
      key: 1,
      label: 'EXPENSES',
      children: (
        <>
        <Ballance/>
          <DashboardForm />
          <DashboardTable />
          <DashboardSummary />
        </>
      ),
    },
    {
      key: 2,
      label: 'INCOME',
      children: (
        <>
        <Ballance/>
          <DashboardForm />
          <DashboardTable />
          <DashboardSummary />
        </>
      ),
    },
  ];

  return (
    <>
      <Tabs defaultActiveKey="1" items={items} />
    </>
  );
};

export default Dashboard;
