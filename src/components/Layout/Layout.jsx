import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navigation from '../Navigation/Navigation';

export const Layout = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main className="container">
        <Outlet />
      </main>
      <Suspense fallback={null}></Suspense>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
        }}
      />
    </div>
  );
};
