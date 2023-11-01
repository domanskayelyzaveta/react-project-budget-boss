import Auth from 'pages/Auth/AuthPage';
import Dashboard from 'pages/Dashboard/DashboardPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import Reports from 'pages/Reports/ReportsPage';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Loader } from './Loader/Loader';
import PrivateRoute from './PrivateRoute/PrivateRoute';

export const App = () => {
  return (
    <>
      <Loader />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/auth" element={<Auth />} />
          {/* <Route path="/" element={<PrivateRoute />}> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
        </Route>
        {/* </Route> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* <StatisticsByCategory /> */}
    </>
  );
};
