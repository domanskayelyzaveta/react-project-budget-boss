import styled from '@emotion/styled';

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 32px 20px 20px 20px;
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  height: 20px;
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  padding: 0;
`;

export const TitleTwo = styled.h2`
  color: var(--text-color);
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.28px;
  text-transform: uppercase;
  width: 96px;
`;

export const ComponentUl = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Создает три столбца в каждом ряду */
  grid-gap: 55px;
`;

export const ItemLi = styled.li`
  flex-basis: calc((100% - (60px * 2)) / 3);
`;

export const P = styled.p`
  color: var(--white-1);
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;
  text-transform: uppercase;
`;

export const CategoryP = styled.p`
  color: var(--white-1);
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  width: 64px;
`;
