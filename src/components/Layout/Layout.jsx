import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navigation from '../Navigation/Navigation';

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      {/* <Suspense fallback={null}>
        <Outlet />
      </Suspense> */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
        }}
      />
    </>
  );
};
