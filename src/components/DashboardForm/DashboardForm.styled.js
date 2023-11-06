import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1280px) {
    flex-wrap: nowrap;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
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

  @media screen and (min-width: 768px) {
    width: 194px;
    padding-left: 20px;
  }
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
  width: 50px;
  // padding-left: 20px;
  // padding-right: 20px;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.24px;
  border: none;
  background: transparent;
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: column;
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

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;

  @media screen and (min-width: 768px) {
    margin-left: 23%;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 0px;
  }
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
  /* margin-left: 30px; */
`;

export const SvgCalc = styled.svg``;
