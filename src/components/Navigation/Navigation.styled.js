import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
  background-color: var(--background);
  color: #fff;
  padding: 20px;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Ellipse = styled.div`
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
`;
const Auth = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const LogOut = styled.div``;

const StyledComponent = styled(NavLink)`
  text-decoration: none;
`;
export { Div, Nav, Ellipse, LogOut, Auth, StyledComponent };
