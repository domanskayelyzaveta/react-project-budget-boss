import styled from '@emotion/styled';
// import money from '../../images/desktop/money-desktop-1x.webp';
import moneyTab from '../../images/tablet/money-tablet-1x.webp';
// import ellipse from '../../images/desktop/ellipse-desktop-1x.webp';

export const FormWrapper = styled.div`
  /* display: grid;
place-items:center; */
  display: flex;
  margin-top: 12px;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  /* overflow:hidden; */

  @media screen and (min-width: 768px) {
    background-image: url(${moneyTab});
    background-position: top center;
    padding-top: 294px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-around;
    gap: 4%;

    margin-top: 100px;
    // padding-top: 0px;
    padding: 0 125px;
    background-image: none;
  }
`;

export const Img = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    display: block;
  }
`;

export const Form = styled.form`
  width: 280px;
  height: 500px;
  border-radius: 16px;
  padding: 32px 20px;
  background-color: var(--grey47);
  box-shadow: 0px 2px 14px 0px rgba(132, 132, 132, 0.2) inset;

  @media screen and (min-width: 768px) {
    width: 392px;
    height: 556px;
    padding: 52px;
    border-radius: 30px;
    box-sizing: border-box;
    /* margin-bottom: 120px; */
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Span = styled.span`
  color: var(--red);
`;

export const RequiredP = styled.p`
  font-size: 10px;
  font-weight: 400;
  margin-top: -22px;
  padding-left: 8px;
  margin-bottom: 8px;
  letter-spacing: 0.4px;
  color: var(--red);
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

  @media screen and (min-width: 768px) {
    width: 272px;
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const InputPassword = styled.input`
  min-width: 240px;
  height: 48px;
  border: none;
  margin-top: 8px;
  margin-bottom: 32px;
  padding-left: 16px;
  border-radius: 16px;
  background-color: var(--text-color);

  @media screen and (min-width: 768px) {
    width: 272px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const LogInBtn = styled.button`
  width: 116px;
  height: 44px;
  font-size: 12px;
  border: none;
  margin-top: 20px;
  margin-right: 8px;
  padding: 15px 38px;
  border-radius: 16px;
  letter-spacing: 0.24px;
  background-color: var(--button);
  box-shadow: 1px 3px 5px 0px rgba(96, 196, 112, 0.35);
  color: #fff;

  @media screen and (min-width: 768px) {
    width: 136px;
    margin-right: 16px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 10px;
  }
`;

export const RegisterBtn = styled.button`
  width: 116px;
  height: 44px;
  font-size: 12px;
  border: none;
  margin-top: 20px;
  padding: 15px 13px;
  border-radius: 16px;
  letter-spacing: 0.24px;
  color: var(--background);
  background-color: var(--text-color);
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 768px) {
    width: 136px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 10px;
  }
`;
