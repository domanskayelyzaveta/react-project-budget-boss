import Auth from 'pages/Auth/AuthPage';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  // selectIsSingedIn,
  selectToken,
} from 'redux/selectors';

const PrivateRoute = () => {
  const token = useSelector(selectToken);
  // const sinedIn = useSelector(selectIsSingedIn);
  if (token) {
    return <Navigate to="/dashboard" />;
  } else {
    return <Auth />;
  }

  // if (sinedIn) {
  //   return <Navigate to="/dashboard" />;
  // } else {
  //   return <Auth />;
  // }
};

export default PrivateRoute;
