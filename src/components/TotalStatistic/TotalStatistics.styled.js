import styled from 'styled-components';

const media = {
  tablet: '(min-width: 768px)',
  mobile: '(max-width: 767px)',
};

export const Container = styled.div`
  @media ${media.mobile} {
    max-width: 767px;
    padding-top: 20px;
    padding-bottom: 25px;
  }
  max-width: 1034px;
  display: flex;
  gap: 20px;
  margin-top: 32px;
  margin-right: auto;
  margin-left: auto;
  padding: 15px 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: linear-gradient(
    116deg,
    #383847 23.54%,
    rgba(56, 56, 71, 0.29) 107.94%
  );
  box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);
`;

export const StatisticsWrap = styled.div`
  @media ${media.mobile} {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  display: flex;
`;

export const StatisticsText = styled.p`
  @media ${media.mobile} {
    padding-right: 0;
    text-align: center;
  }
  padding-right: 15px;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #c7ccdc;
`;

export const ExpenseTotal = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.56px;
  color: var(--red);
`;

export const IncomeTotal = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.56px;
  color: var(--salat);
`;
