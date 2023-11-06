import styled from 'styled-components';

export const Content = styled.div`
  box-sizing: border-box;
  text-align: center;
  background: linear-gradient(
    116deg,
    #383847 23.54%,
    rgba(56, 56, 71, 0.29) 107.94%
  );
  box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
`;
export const Childrens = styled.div`
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
  /* left: 8px; */

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
