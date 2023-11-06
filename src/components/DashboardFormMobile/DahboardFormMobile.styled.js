import styled from 'styled-components';

export const StyledFormMobileWrapper = styled.div`
  position: relative;
`;

export const StyledTextInputWrapper = styled.div`
  position: relative;
  padding-top: 30px;
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 82px;
`;

export const CalcWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
export const StyledInputButton = styled.div`
  margin-right: 20px;
`;
export const Select = styled.div``;

export const StyledDescrInput = styled.input`
  /* margin-top: 30px; */
  position: relative;

  width: 280px;
  font-size: 12px;
  color: var(--white-DC);
  background-color: transparent;
  border: 2px solid var(--grey);
  padding: 13px 20px;
  border-radius: 15px 15px 0 0;
  @media screen and (min-width: 768px) {
    width: 280px;
  }
  @media screen and (min-width: 1280px) {
    width: 280px;
  }
`;

export const StyledSumInput = styled.input`
  color: #fff;
  background-color: transparent;
  padding: 12px 0 12px 18px;
  border: 2px solid var(--grey);
  border-radius: 15px 0 0 15px;
  @media screen and (min-width: 768px) {
    width: 280px;
  }
`;
export const Div = styled.div`
  border: 2px solid var(--grey);
  border-left: none;
  padding: 12px 20px;
  border-radius: 0 15px 15px 0;
`;

export const SvgWrapper = styled.svg``;

export const StyledErrorMobile = styled.div`
  font-size: 0.5rem;
  position: absolute;
  top: 40%;
  left: 8%;
  margin: 0;
  color: var(--red);
`;
export const StyledErrorSumMobile = styled.div`
  font-size: 0.5rem;
  position: absolute;
  top: 70%;
  left: 8%;
  margin: 0;
  color: var(--red);
`;
export const StyledErrorSelectMobile = styled.div`
  font-size: 0.5rem;
  position: absolute;
  top: 70%;
  left: 9%;
  margin: 0;
  color: var(--red);
`;
