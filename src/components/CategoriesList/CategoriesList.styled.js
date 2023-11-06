import styled from 'styled-components';

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: transparent;
  padding-top: 32px;

  @media screen and (min-width: 768px) {
    width: 704px;
    border-radius: 30px;
    background: linear-gradient(
      116deg,
      #383847 23.54%,
      rgba(56, 56, 71, 0.29) 107.94%
    );
    box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);
    margin-top: 32px;
    margin-bottom: 40px;
    padding-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1280px) {
    width: 1034px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
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
  width: 90px;
`;

export const ContainerList = styled.div`
  @media screen and (min-width: 768px) {
    padding-right: 45px;
    padding-left: 45px;
  }
  @media screen and (min-width: 1280px) {
    padding-right: 200px;
    padding-left: 200px;
  }
`;

export const ComponentUl = styled.ul`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  row-gap: 40px;
  column-gap: 16px;
`;

export const ItemLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: calc((100% - (17px * 2)) / 3);

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - (20px * 5)) / 6);
  }
`;

export const P = styled.p`
  color: var(--white-1);
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;
  text-transform: uppercase;
  margin-bottom: 6px;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(86, 86, 107, 0.2);
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.15);
  padding-left: 5px;
  padding-top: 5px;
  box-shadow: ${props =>
    props.$primaryImage ? '0px 0px 6px 0px #41a350' : null};
  border: ${props => (props.$primaryImage ? '1px solid var(--button)' : null)};

  &:hover {
    box-shadow: 0px 0px 6px 0px #41a350;
    border: 1px solid var(--button);
    cursor: pointer;
    transition: all 0.2s;
  }

  @media screen and (min-width: 768px) {
    width: 64px;
    height: 64px;
  }
`;

export const CategoryP = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 82px;
  color: var(--white-1);
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  margin-top: 8px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    letter-spacing: 0.24px;
    margin-top: 6px;
  }
`;
