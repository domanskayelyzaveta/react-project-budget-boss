import React from 'react';
import { NavLink } from 'react-router-dom';
import logo1x from '../../images/mobile/logo-mobile-1x.webp';
import logo2x from '../../images/mobile/logo-mobile-2x.webp';
import logotablet1x from '../../images/tablet/logo-tablet-1x.webp';
import logotablet2x from '../../images/tablet/logo-tablet-2x.webp';
import sprite from '../../images/sprite.svg';
import {
  Div,
  Ellipse,
  LogOut,
  StyledComponent,
  Wrapper,
  P,
  Line,
} from './Navigation.styled';
import { useSelector, useDispatch } from 'react-redux';
import { logoutThunk } from 'redux/thunks';
import { selectEmail, selectToken } from 'redux/selectors';

const Navigation = () => {
  const userEmail = useSelector(selectEmail);
  const token = useSelector(selectToken);
  const userInitial = userEmail?.charAt(0).toUpperCase();
  const userName = userEmail?.split('@')[0];
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutThunk(token));
  };

  return (
    <Div>
      <>
        {token ? (
          <>
            <NavLink to="/" end>
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet={`${logo1x} 1x, ${logo2x} 2x`}
                />
                <source
                  media="(min-width: 769px) and (max-width: 1280px)"
                  srcSet={`${logotablet1x} 1x, ${logotablet2x} 2x`}
                />
                <source
                  media="(min-width: 1281px)"
                  srcSet={`${logotablet1x} 1x, ${logotablet2x} 2x`}
                />
                <img
                  src={logo1x}
                  srcSet={`${logo1x} 1x, ${logo2x} 2x`}
                  alt="Logo"
                />
              </picture>
            </NavLink>

            <Wrapper>
              <StyledComponent to="/" end>
                <Ellipse>{userInitial}</Ellipse>
              </StyledComponent>
              <LogOut onClick={handleLogout}>
                <NavLink to="/" end>
                  <svg className="logout-icon" width="16" height="16">
                    <use href={`${sprite}#icon-logout`} />
                  </svg>{' '}
                </NavLink>{' '}
              </LogOut>
              <P>{userName}</P>
              <Line>
                <NavLink to="/" end>
                  <svg width="2" height="36">
                    <use href={`${sprite}#vertical-line`} />
                  </svg>
                </NavLink>
              </Line>

              <StyledComponent to="/" end>
                <P onClick={handleLogout}>Exit</P>
              </StyledComponent>
            </Wrapper>
          </>
        ) : (
          <NavLink to="/" end>
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet={`${logo1x} 1x, ${logo2x} 2x`}
              />
              <source
                media="(min-width: 769px) and (max-width: 1280px)"
                srcSet={`${logotablet1x} 1x, ${logotablet2x} 2x`}
              />
              <source
                media="(min-width: 1281px)"
                srcSet={`${logotablet1x} 1x, ${logotablet2x} 2x`}
              />
              <img
                src={logo1x}
                srcSet={`${logo1x} 1x, ${logo2x} 2x`}
                alt="Logo"
              />
            </picture>
          </NavLink>
        )}
      </>
    </Div>
  );
};

export default Navigation;
