import styled from 'styled-components';

export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 280px;
  overflow-y: auto;

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

  height: 38px;
  padding: 20px 0;
  flex-direction: column;
  justify-content: center;

  background-color: var(--grey-6B);
  color: var(--text-color);

  border-radius: 8px 8px 0 0;

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
  list-style: none;
  color: var(--text-color);
`;

export const StyledSummaryItem = styled.li`
  padding: 18px 12px;
  background-color: var(--grey-6B);
`;
