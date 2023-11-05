import { Experimental_CssVarsProvider } from '@mui/material';
import styled from 'styled-components';
export const MobileDashboardBalanceFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 511px;
  width: 320px;
  background-color: var(--grey47);
  outline: 2px solid red;
`;

export const AddTransahtionWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: 145px;
  height: 24px;
  margin: 20px 87px 24px 88px;
  /* outline: 2px solid green; */
`;

export const ReportAndStatisticsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 84px;
  height: 24px;
  margin: 0 118px 30px 118px;
`;

export const BalanceWrapperMobil = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color:var(--text-color)
`;

export const StyledAddTransactionButton = styled.button`
  position: relative;
  background-color: transparent;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
`;

export const StyledAddTransactionButtonIcon = styled.span`
  background-image: url('../../images/sprite.svg#icon-plus');
  width: 24px;
  height: 24px;
  background-size: 100% 100%;
  background-color: green;
  display: inline-block;
  border-radius: 50%;
  fill: white;
  margin-right: 10px;
`;

export const StyledAddTransactionButtonText = styled.span`
  flex: 1;
  flex-wrap:nowrap;
  text-transform: uppercase;
  color: #f6f7fb;
  

  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.24px;
  text-transform: uppercase;
`;
