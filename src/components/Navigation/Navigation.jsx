import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectEmail, selectToken } from 'redux/selectors';
import { logoutThunk } from 'redux/thunks';
import logo1x from '../../images/mobile/logo-mobile-1x.webp';
import logo2x from '../../images/mobile/logo-mobile-2x.webp';
import sprite from '../../images/sprite.svg';
import logotablet1x from '../../images/tablet/logo-tablet-1x.webp';
import logotablet2x from '../../images/tablet/logo-tablet-2x.webp';
import {
  ButtonExit,
  Div,
  Ellipse,
  Line,
  LogOut,
  P,
  StyledComponent,
  Wrapper,
} from './Navigation.styled';

const Navigation = () => {
  const [isModalExitOpen, setIsModalExitOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalExitOpen(!isModalExitOpen);
  };

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
                  </svg>
                </NavLink>
              </LogOut>
              <P>{userName}</P>
              <Line>
                <NavLink to="/" end>
                  <svg width="2" height="36">
                    <use href={`${sprite}#vertical-line`} />
                  </svg>
                </NavLink>
              </Line>

              <ButtonExit to="/" onClick={handleModalOpen}>
                Exit
              </ButtonExit>
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
      {isModalExitOpen && (
        <Modal
          children={<p>Do you really want to leave?</p>}
          incomeEvent={handleLogout}
          onCloseModal={handleModalOpen}
        ></Modal>
      )}
    </Div>
  );
};

export default Navigation;
