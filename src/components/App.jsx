import Auth from 'pages/Auth/AuthPage';
import Dashboard from 'pages/Dashboard/DashboardPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import Reports from 'pages/Reports/ReportsPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userThunk } from 'redux/thunks';
// import { Loader } from './Loader/Loader';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './AutoAuth/PublicRoute/PublicRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userThunk());
  }, [dispatch]);

  return (
    <>
      {/* <Loader /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/auth" />} />
          <Route path="" element={<PublicRoute />}>
            <Route path="/auth" element={<Auth />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
