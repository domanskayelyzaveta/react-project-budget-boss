import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from 'pages/Dashboard/DashboardPage';
import Reports from 'pages/Reports/ReportsPage';
import Auth from 'pages/Auth/AuthPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
