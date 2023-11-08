import { Tabs } from 'antd';
import styled from 'styled-components';

export const DataWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  gap: 75px;
  margin-top: 72px;
  // padding: 60px 34px;
  background: transparent;

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    margin-top: 48px;
    gap: 40px;
  }
`;

export const IncomeWrapper = styled.div`
  padding: 32px 32px 40px 32px;
  border-radius: 0 20px 20px 20px;
  background: linear-gradient(
    115.74deg,
    #383847 23.54%,
    rgba(56, 56, 71, 0.29) 107.94%
  );
`;

export const ExpensesWrapper = styled.div`
  padding: 32px 32px 40px 32px;
  border-radius: 0 20px 20px 20px;
  background: linear-gradient(
    115.74deg,
    #383847 23.54%,
    rgba(56, 56, 71, 0.29) 107.94%
  );
`;
export const StyledTop = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding-top: 40px;
  }
`;

export const StyledBalanceWrapper = styled.div`
  @media screen and (min-width: 768px) {
    // margin-left: 20px;
    // margin-bottom: 60px;

    margin: 40px 20px 60px 20px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: auto;
    margin-left: 40%;
  }
`;
export const StyledLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 35px;
`;

export const StyledTabs = styled(Tabs)``;

export const TabsWrapper = styled.div`
margin-bottom:38px;
`
