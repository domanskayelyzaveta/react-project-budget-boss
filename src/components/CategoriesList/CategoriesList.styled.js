import styled from '@emotion/styled';

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: transparent;
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 40px;
  column-gap: 16px;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
`;

export const ItemLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: calc((100% - (17px * 2)) / 3);
`;

export const P = styled.p`
  color: var(--white-1);
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

export const Image = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(86, 86, 107, 0.2);
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.15);
  padding-left: 5px;
  padding-top: 5px;
`;

export const CategoryP = styled.p`
  color: var(--white-1);
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  width: 82px;
  margin-top: 8px;
  margin-right: auto;
  margin-left: auto;
`;
