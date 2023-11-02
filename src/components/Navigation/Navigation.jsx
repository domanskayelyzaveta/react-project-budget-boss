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
import { useSelector, useDispatch } from 'react-redux';
import { logoutThunk } from 'redux/thunks';
import { selectEmail, selectToken } from 'redux/selectors';

const Navigation = () => {
  const isSignedIn = useSelector(state => state.user.isSignedIn);

  const userEmail = useSelector(selectEmail);
  const token = useSelector(selectToken);
  const userInitial = userEmail?.charAt(0).toUpperCase();
  // console.log(userInitial);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutThunk(token));
  };

  return (
    <Div>
      <Nav>
        {isSignedIn ? (
          <Auth>
            <NavLink to="/" end>
              <img src={logo} alt="Logo" />
            </NavLink>
            <StyledComponent to="/" end>
              <Ellipse>{userInitial}</Ellipse>
            </StyledComponent>
            <NavLink to="/" end>
              <LogOut onClick={handleLogout}>
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
