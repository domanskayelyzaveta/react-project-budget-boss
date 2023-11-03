import { Link } from 'react-router-dom';
import styled from 'styled-components';

const media = {
  tablet: '(min-width: 768px)',
  mobile: '(max-width: 767px)',
};

export const Container = styled.div`
  @media ${media.mobile} {
    display: flex;
    flex-direction: column-reverse;
    max-width: 767px;
    margin-top: 32px;
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
  @media ${media.mobile} {
    display: none;
  }
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 16px;
`;

export const Back = styled.svg`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

export const BackText = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;
  color: var(--white-DC);
`;

export const MobileWrapPeriod = styled.div`
  @media ${media.mobile} {
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
  }
`;

// export const BalanceWrap = styled.div`
//   @media ${media.mobile} {
//     display: flex;
//     flex-direction: column;
//     gap: 8px;
//   }
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: row;
// `;

// export const BalanceTitle = styled.h2`
//   @media ${media.mobile} {
//     margin-right: 0;
//   }
//   margin-right: 20px;
//   text-align: center;
//   font-size: 12px;
//   font-weight: 500;
//   line-height: normal;
//   letter-spacing: 0.24px;
//   color: rgba(199, 204, 220, 0.5);
// `;

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
