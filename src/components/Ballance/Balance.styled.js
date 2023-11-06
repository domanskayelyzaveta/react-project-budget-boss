import styled from 'styled-components';

export const StyledBalanceAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 182px;
  border-radius: 16px;
  border: 2px solid var(--grey8F);

  @media screen and (min-width: 768px) {
    width: 125px;
  }
`;

export const BalanceWrapper = styled.div`
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

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
