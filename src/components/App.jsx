import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Dashboard from 'pages/Dashboard/DashboardPage';
import Reports from 'pages/Reports/ReportsPage';
import Auth from 'pages/Auth/AuthPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import { Loader } from './Loader/Loader';
import { StatisticsByCategory } from './StatisticsByCategory/StatisticsByCategory';

export const App = () => {
  return (
    <>
      <Loader />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* <StatisticsByCategory /> */}
    </>
  );
};
