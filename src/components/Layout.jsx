import React from 'react';
import { Outlet } from 'react-router-dom';
import { Div } from './Layout.styled';

const Layout = () => {
  return (
    <Div>
      Layout
      <Outlet />
    </Div>
  );
};

export default Layout;
