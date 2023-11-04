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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
`;

export const StyledBalanceWrapper = styled.div`
  margin-right: auto;
  margin-left: 50%;
`;
export const StyledLinkWrapper = styled.div``;

export const StyledTabs = styled(Tabs)``;
