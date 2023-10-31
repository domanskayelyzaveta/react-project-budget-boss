import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <main>
          <Outlet />
        </main>
      </header>
      Layout
    </div>
  );
};

export default Layout;
