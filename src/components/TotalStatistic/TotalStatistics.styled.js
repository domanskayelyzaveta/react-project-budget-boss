import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (max-width: 767px) {
    max-width: 767px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  max-width: 1034px;
  display: flex;
  margin-top: 32px;
  margin-right: auto;
  margin-left: auto;
  padding: 8px 0;
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

export const StatisticsWrapLeft = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 10px;
  }
  display: flex;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 20px;
  border-right: 2px solid #474759;
`;

export const StatisticsWrapRight = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-left: 10px;
  }
  padding-left: 20px;
  display: flex;
`;

export const ExpenseText = styled.p`
  @media screen and (max-width: 767px) {
    padding-right: 0;
    text-align: center;
  }
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  color: #c7ccdc;
`;

export const IncomeText = styled.p`
  @media screen and (max-width: 767px) {
    padding-right: 0;
    text-align: center;
  }
  font-size: 14px;
  font-weight: 700;
  padding-right: 10px;
  line-height: normal;
  color: #c7ccdc;
`;

export const ExpenseTotal = styled.p`
  font-size: 14px;
  text-align: center;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 0.56px;
  padding-left: 10px;
  color: var(--red);
`;

export const IncomeTotal = styled.p`
  font-size: 14px;
  text-align: center;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 0.56px;
  padding-right: 10px;
  color: var(--salat);
`;

export const ReportPageWrapper = styled.div`
padding-left: 20px;
padding-right: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
    padding-left: 20px;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 60px;
    margin-left: auto;
    margin-right: auto;
    width: 1034px;
  }
`;
