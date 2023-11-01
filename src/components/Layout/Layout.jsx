import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from '../../images/mobile/logo-mobile-1x.webp';
import sprite from '../../images/sprite.svg';
import { Div, Nav, Ellipse, LogOut, Auth } from './Layout.styled';
// import { useAuth } from '../useAuth';

const Layout = () => {
  // const { isLoggedIn } = useAuth();
  return (
    <Div>
      <header>
        <Nav>
          <NavLink to="/" end>
            <img src={logo} alt="Logo" />
          </NavLink>
          {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
          <Auth>
            <NavLink to="/" end>
              <Ellipse>U</Ellipse>
            </NavLink>
            <NavLink to="/" end>
              <LogOut>
                <svg width="16" height="16">
                  <use href={`${sprite}#icon-logout`} />
                </svg>
              </LogOut>
            </NavLink>
          </Auth>
        </Nav>
      </header>

      <main>
        <Outlet />
      </main>
    </Div>
  );
};

export default Layout;
