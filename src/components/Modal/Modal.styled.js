import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  inset: 0;
  z-index: 1111120;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 57px 40px;
  background-color: var(--grey47);
  position: relative;
  display: flex;
  width: 380px;
  height: 175px;
  border-radius: 16px;
  box-shadow: 0px 2px 14px 0px rgba(132, 132, 132, 0.2) inset;
`;
export const Childrens = styled.div`
  margin-bottom: 32px;
  & p {
    color: var(--text-color);
    text-align: center;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.32px;
  }
`;

export const StyledButtonClose = styled.button`
  position: absolute;
  padding: 0;
  width: 32px;
  height: 32px;
  top: 8px;
  right: 8px;

  border: none;
  background: transparent;
  transition: all 0.1s ease-in;
  &:hover {
    cursor: pointer;
    stroke: var(--button);
  }
`;

export const StyledButtonAgree = styled.button`
  width: 141px;
  padding: 13.5px 17px;
  border-radius: 16px;
  border: 2px solid var(--grey8F);
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.25);
  background-color: var(--button);
  color: var(--text-color);

  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.24px;
  text-transform: uppercase;
`;

export const StyledButtonDisagree = styled.button`
  width: 141px;
  padding: 13.5px 17px;
  border-radius: 16px;
  border: 2px solid var(--grey8F);
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.25);
  background: transparent;
  color: var(--text-color);

  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.24px;
  text-transform: uppercase;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
