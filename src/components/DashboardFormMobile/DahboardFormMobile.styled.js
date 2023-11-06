import styled from 'styled-components';

export const StyledFormMobileWrapper = styled.div`
  /* outline: 1px solid tomato; */
`;

export const StyledForm = styled.form``;
export const StyledTextInputWrapper = styled.div``;

export const CalcWrapper = styled.div`
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
  margin-top: 30px;

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
