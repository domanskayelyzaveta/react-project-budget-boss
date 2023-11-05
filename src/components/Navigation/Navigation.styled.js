import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--background);
  color: #fff;
  height: 5vh;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 6px;
`;

const Ellipse = styled.div`
  width: 32px;
  height: 32px;
  text-align: center;
  border-radius: 50px;
  margin-right: 16px;
  background-color: var(--grey-6B);
  color: var(--white-1);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.48px;

  @media screen and (min-width: 768px) {
    margin-right: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0 auto;

  @media screen and (min-width: 768px) {
    gap: 16px;
    padding-right: 21px;
  }
  @media screen and (min-width: 1280) {
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
