import styled from 'styled-components';

const media = {
  tablet: '(min-width: 768px)',
  mobile: '(max-width: 767px)',
};

export const Container = styled.div`
  @media ${media.mobile} {
    max-width: 767px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  max-width: 1034px;
  display: flex;
  gap: 20px;
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
  @media ${media.mobile} {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  display: flex;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 20px;
  border-right: 2px solid #474759;
`;

export const StatisticsWrapRight = styled.div`
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
  font-weight: 700;
  line-height: normal;
  color: #c7ccdc;
`;

export const ExpenseTotal = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.56px;
  color: var(--red);
`;

export const IncomeTotal = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.56px;
  color: var(--salat);
`;



export const ReportPageWrapper = styled.div`
 @media ${media.mobile} {
      padding-bottom:60px;
  }

   @media ${media.tablet} {
      padding-bottom:80px;
  }

`