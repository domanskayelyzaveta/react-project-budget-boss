import styled from '@emotion/styled';

export const StyledLi = styled.li`
  list-style: none;
`;

export const StyledMobTransactionDescription = styled.div`
  text-transform: capitalize;
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.48px;
  color: var(--white-1);
`;

export const StyledMobTransactionDate = styled.div`
  font-size: 8px;
  font-weight: 400;
  line-height: 2.2;
  letter-spacing: 0.32px;
  /* margin-top: 10px; */
  text-transform: uppercase;
  color: var(--white-1);
`;

export const StyledMobTransactionCategory = styled.div`
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 2.2;
  letter-spacing: 0.32px;
  margin-left: 20px;
  color: var(--white-1);
`;

export const StyledDataAndCategoryDiv = styled.div`
  display: flex;
  align-items:flex-end;
`;
export const StyledPriceDiv = styled.div`
  text-align: right;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.48px;
  color: var(--red);
`;

export const MobileTransactionListDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid #80848F;
  margin-bottom:5px;
`;

export const DivMobTransaction = styled.div`
  display: flex;
  /* margin-bottom: 16px;
  margin-left: 16px; */
  align-items:center;
  
`;
