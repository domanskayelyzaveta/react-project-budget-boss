import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    max-width: 767px;
    margin-top: 16px;
  }
  max-width: 1034px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 42px;
  margin-right: auto;
  margin-left: auto;
`;

export const BackBtn = styled(Link)`
  @media screen and (max-width: 767px) {
    display: flex;
    margin-right: auto;
    gap: 4px;
  }
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 16px;
`;

export const Back = styled.svg`
  @media screen and (max-width: 767px) {
    width: 18px;
    height: 18px;
  }
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

export const BackText = styled.span`
  @media screen and (max-width: 767px) {
    text-align: center;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.2px;
    text-transform: uppercase;
  }
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;
  color: var(--white-DC);
`;

export const MobileWrapPeriod = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    margin-bottom: 32px;
  }
`;

export const PeriodTitle = styled.h3`
  margin-bottom: 5px;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;
  color: rgba(199, 204, 220, 0.5);
`;

export const Period = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PeriodBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background-color: transparent;
  border: none;
`;

export const PeriodArrow = styled.svg`
  width: 15px;
  height: 15px;
  flex-shrink: 0;
`;

export const PeriodText = styled.div`
  width: 132px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.28px;
  text-transform: uppercase;
  color: var(--text-color);
`;
