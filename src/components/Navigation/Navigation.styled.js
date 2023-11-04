import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--background);
  color: #fff;
  height: 5vh;
  padding: 8px 40px;
`;

const Ellipse = styled.div`
  margin-right: 16px;
  background-color: var(--grey-6B);
  border-radius: 50px;
  padding: 9px 12px;
  color: var(--white-1);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.48px;
  @media screen and (min-width: 768px) {
    margin-right: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

const LogOut = styled.div`
  .logout-icon {
    display: block;
  }
  @media screen and (min-width: 768px) {
    .logout-icon {
      display: none;
    }
  }
`;
const Line = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;
const P = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    color: var(--white-1);
  }
`;
const StyledComponent = styled(NavLink)`
  text-decoration: none;
`;

const Auth = styled.div``;

export { Div, Ellipse, Wrapper, LogOut, StyledComponent, P, Line };

// @media screen and(min - width: 768px) { }
// @media screen and(min - width: 1280px) { }
