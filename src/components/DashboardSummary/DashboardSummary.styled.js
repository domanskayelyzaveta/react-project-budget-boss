import styled from 'styled-components';

export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 4px;
  height: 280px;
  width: 213px;

  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Изменение цвета "бегунка" (ползунка) полосы прокрутки */
  ::-webkit-scrollbar-thumb {
    background-color: var(--button);
    border-radius: 6px;
  }

  /* Изменение цвета фона полосы прокрутки (полосы прокрутки, но не "бегунка")
::-webkit-scrollbar-track {
  background-color: #f9f9f9;
} */
`;

export const StyledSummaryHeader = styled.div`
  display: flex;
  align-items: center;
  position: sticky;

  height: 38px;
  padding: 16px 0;
  flex-direction: column;
  justify-content: center;

  background-color: var(--grey-6B);
  color: var(--text-color);

  border-radius: 24px 24px 0 0;

  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.24px;
  text-transform: uppercase;
`;

export const StyledSummaryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0;
  text-transform: uppercase;
  color: var(--white-DC);
  overflow-y: auto;
`;

export const StyledSummaryItem = styled.li`
  padding: 12px 12px;
  background-color: rgba(86, 86, 107, 0.5);
`;

export const DataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
