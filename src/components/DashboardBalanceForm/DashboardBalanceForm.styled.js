import styled from 'styled-components';

export const StyledBalanceAmountInput = styled.input`
  text-align: right;
  width: 125px;
  padding: 13px 0;
  padding-right: 12px;
  margin: 0;
  border-radius: 16px;
  background: transparent;
  border: 2px solid var(--grey8F);
  color: var(--text-color);
`;

export const BalanceFormWrapper = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
  color: var(--text-color);
  color: #c7ccdc;

  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.24px;
`;

export const StyledConfirmButton = styled.button`
  width: 141px;
  padding: 13.5px 17px;
  border-radius: 16px;
  border: 2px solid var(--grey8F);
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.25);
  background: transparent;
  color: var(--grey8F);

  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.24px;
  text-transform: uppercase;
`;
