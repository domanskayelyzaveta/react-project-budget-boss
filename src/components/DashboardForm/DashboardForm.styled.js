import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  align-items: baseline;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
    flex-wrap: nowrap;
  }
  // @media screen and (min-width: 768px) {
  //   flex-direction: row;
  // }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledDescrInput = styled.input`
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
  outline: none;
  color: var(--white-3, rgba(199, 204, 220, 0.5));

  /* border: none; */
  border-right: 2px solid var(--grey, #474759);
  border-top: none;
  margin: 0;
  border-left: none;
  border-bottom: none;
  background: transparent;
  /* & p {
    color:red;
  } */

  @media screen and (min-width: 768px) {
    width: 194px;
    padding-left: 20px;
  }
  @media screen and (min-width: 1280px) {
    width: 220px;
    padding-left: 20px;
  }
`;

export const StyledOption = styled.option`
  background-color: #f9f9f9;
  color: #333;
`;

export const StyledSumInput = styled.input`
  outline: none;
  color: var(--white-DC);
  width: 50px;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.24px;
  border: none;
  background: transparent;

  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 28px;
  }
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: column;
  box-sizing: border-box;
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
  position: relative;
  width: 90px;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 116px;
  }
  @media screen and (min-width: 1280px) {
    width: 150px;
    padding-left: 26px;
    // margin-left: 30px;
  }
`;

export const SvgCalc = styled.svg``;

export const StyledError = styled.p`
  font-size: 0.5rem;
  position: absolute;
  top: 115%;
  left: 12%;
  margin: 0;
  color: var(--red);
`;
export const StyledSelectError = styled.p`
  font-size: 0.5rem;
  position: absolute;
  top: 115%;
  left: 65%;
  margin: 0;
  color: var(--red);
`;
