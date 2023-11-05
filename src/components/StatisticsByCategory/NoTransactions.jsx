import styled from '@emotion/styled';
import React from 'react';

export function NoTransactionsChart() {
  const media = {
    mobile: '(max-width: 767px)',
    tablet: '(min-width: 768px)',
  };
  const NoTransactionsText = styled.p`
    margin-top: 65px;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.33;
    color: var(--text-color);
    @media ${media.tablet} {
      width: 330px;
      padding-top: 170px;
      padding-bottom: 170px;
      margin-right: auto;
      margin-left: auto;
    }
  `;
  const NoTransactionsWrap = styled.div`
    @media ${media.mobile} {
      width: 280px;
      margin-left: auto;
      margin-right: auto;
      background-color: transparent;
    }
    @media ${media.tablet} {
      height: 420px;
      background-color: rgba(56, 56, 71, 0.6);
      box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);
      border-radius: 30px;
    }
  `;

  return (
    <NoTransactionsWrap>
      <NoTransactionsText>
        We currently have no transactions to display. But don't worry, your
        financial information is in safe hands. Plan your future transactions
        and watch your finances grow with us!
      </NoTransactionsText>
    </NoTransactionsWrap>
  );
}
