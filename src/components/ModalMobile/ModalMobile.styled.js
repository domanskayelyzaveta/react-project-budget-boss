import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  /* outline: 1px solid tomato; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 57px 40px;
  background-color: var(--grey47);
  position: relative;
  display: flex;
  min-width: 320px;
  min-height: 100%;
  border-radius: 16px;
  box-shadow: 0px 2px 14px 0px rgba(132, 132, 132, 0.2) inset;
`;
export const Childrens = styled.div`
  /* display: flex;
  justify-content: center;
  flex-direction: column; */
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
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0;
  top: 8px;
  left: 8px;

  margin-top: 16px;
  margin-left: 20px;

  color: var(--text-color);
  text-align: center;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.2px;
  text-transform: uppercase;

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
