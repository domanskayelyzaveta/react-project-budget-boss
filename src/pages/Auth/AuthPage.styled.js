import styled from '@emotion/styled';

export const FormWrapper = styled.div`
  display: flex;
  margin-top: 120px;
  margin-right: 125px;
  justify-content: flex-end;
  // background-image: url('../../images/desktop/ellipse-desktop-1x.webp');
`;

export const Span = styled.span`
  color: var(--red);
`;

export const RequiredP = styled.p`
  font-size: 10px;
  font-weight: 400;
  margin-top: -22px;
  padding-left: 8px;
  margin-bottom: 12px;
  letter-spacing: 0.4px;
  color: var(--red);
`;

export const Form = styled.form`
  width: 260px;
  height: 488px;
  margin-bottom: 40px;
  border-radius: 16px;
  padding: 32px 20px;
  background-color: var(--grey47);
  box-shadow: 0px 2px 14px 0px rgba(132, 132, 132, 0.2) inset;

  @media screen and (min-width: 1280px) {
    width: 392px;
    height: 556px;
    padding: 52px;
    border-radius: 30px;
    box-sizing: border-box;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  width: 203px;
  margin: auto;
  margin-bottom: 20px;
  letter-spacing: 0.56px;
  color: var(--text-color);

  @media screen and (min-width: 1280px) {
    width: 218px;
    font-size: 16px;
    line-height: normal;
    letter-spacing: 0.64px;
  }
`;

export const Paragraph = styled.p`
  width: 240px;
  height: 28px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.48px;
  margin-bottom: 24px;
  color: var(--text-color);

  @media screen and (min-width: 1280px) {
    width: 288px;
    height: 32px;
    font-size: 14px;
    margin: auto;
    letter-spacing: 0.56px;
    margin-bottom: 32px;
  }
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 400;
  padding-left: 8px;
  letter-spacing: 0.48px;
  color: var(--text-color);
`;

export const InputEmail = styled.input`
  min-width: 240px;
  height: 48px;
  border: none;
  margin-top: 8px;
  margin-bottom: 32px;
  padding-left: 16px;
  border-radius: 16px;
  background-color: var(--text-color);

  @media screen and (min-width: 1280px) {
    width: 272px;
  }
`;
export const InputPassword = styled.input`
  min-width: 240px;
  height: 48px;
  border: none;
  margin-top: 8px;
  margin-bottom: 40px;
  padding-left: 16px;
  border-radius: 16px;
  background-color: var(--text-color);

  @media screen and (min-width: 1280px) {
    width: 272px;
  }
`;

export const LogInBtn = styled.button`
  width: 116px;
  height: 44px;
  font-size: 12px;
  border: none;
  margin-right: 8px;
  padding: 15px 38px;
  border-radius: 16px;
  letter-spacing: 0.24px;
  background-color: var(--button);
  box-shadow: 1px 3px 5px 0px rgba(96, 196, 112, 0.35);
  color: #fff;

  @media screen and (min-width: 1280px) {
    width: 136px;
    margin-right: 16px;
  }
`;

export const RegisterBtn = styled.button`
  width: 116px;
  height: 44px;
  font-size: 12px;
  border: none;
  padding: 15px 13px;
  border-radius: 16px;
  letter-spacing: 0.24px;
  color: var(--background);
  background-color: var(--text-color);
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 1280px) {
    width: 136px;
  }
`;

export const Img = styled.img`
  margin-right: 42px;
`;
