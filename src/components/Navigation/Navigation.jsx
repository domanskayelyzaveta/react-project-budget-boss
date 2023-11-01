import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/mobile/logo-mobile-1x.webp';
import sprite from '../../images/sprite.svg';
import {
  Div,
  Nav,
  Ellipse,
  LogOut,
  Auth,
  StyledComponent,
} from './Navigation.styled';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isSignedIn = useSelector(state => state.user.isSignedIn);

  return (
    <Div>
      <Nav>
        {isSignedIn ? (
          <Auth>
            <NavLink to="/" end>
              <img src={logo} alt="Logo" />
            </NavLink>
            <StyledComponent to="/" end>
              <Ellipse>U</Ellipse>
            </StyledComponent>
            <NavLink to="/" end>
              <LogOut>
                <svg width="16" height="16">
                  <use href={`${sprite}#icon-logout`} />
                </svg>
              </LogOut>
            </NavLink>
          </Auth>
        ) : (
          <NavLink to="/" end>
            <img src={logo} alt="Logo" />
          </NavLink>
        )}
      </Nav>
    </Div>
  );
};

export default Navigation;
