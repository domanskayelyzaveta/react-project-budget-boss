import Auth from 'pages/Auth/AuthPage';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/selectors';

const PrivateRoute = () => {
  const token = useSelector(selectToken);

  if (token) {
    return <Navigate to="/expenses" />;
  } else {
    return <Auth />;
  }
};

export default PrivateRoute;
