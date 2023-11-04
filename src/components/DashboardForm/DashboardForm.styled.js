import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
`;
export const StyledForm = styled.form`
  display: flex;
  gap: 32px;
  align-items: center;
`;

export const StyledDescrInput = styled.input`
  color: var(--white-3, rgba(199, 204, 220, 0.5));
  // padding-left: 20px;
  // padding-right: 20px;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.24px;
  width: 290px;
  // margin: 15px 0;

  /* border: none; */
  border-right: 2px solid var(--grey, #474759);
  border-top: none;
  margin: 0;
  border-left: none;
  border-bottom: none;
  background: transparent;
`;
// export const CustomSelect = styled.select`
//   width: 100%;
//   padding-left: 20px;
//   padding-right: 20px;
//   margin: 15px 0;
//   border-right: 2px solid var(--grey, #474759);
//   border-top: none;
//   border-left: none;
//   border-bottom: none;
//   color: red;
//   background: transparent;
//   color: var(--white-DC);
// `;

export const StyledOption = styled.option`
  background-color: #f9f9f9;
  color: #333;
`;

export const StyledSumInput = styled.input`
  color: var(--white-DC);
  width: 40px;
  // padding-left: 20px;
  // padding-right: 20px;
  margin: 15px 0;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.24px;
  border: none;
  margin: 0;
  background: transparent;
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  // gap: 20px;
  /* padding: 15px 20px; */
  color: var(--white-DC);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.24px;
  border-radius: 16px 16px 16px 0px;
  border: 2px solid var(--grey, #474759);
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyledInputButton = styled.button`
  width: 136px;
  height: 44px;
  border-radius: 16px;
  border: none;
  background: var(--button, #42a652);
  box-shadow: 1px 3px 5px 0px rgba(96, 196, 112, 0.35);
  color: #fff;

  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.24px;
  text-transform: uppercase;

  &:hover {
  }
`;

export const StyledClearButton = styled.button`
  width: 136px;
  height: 44px;
  border-radius: 16px;
  border: 2px solid var(--grey, #474759);
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.25);
  background: transparent;
  color: #fff;

  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.24px;
  text-transform: uppercase;
`;

export const CalcWrapper = styled.div`
  width: 90px;
  display: flex;
  align-items: center;
  margin-left: 30px;
`;

export const SvgCalc = styled.svg``;
