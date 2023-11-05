import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 120px;
  height: 40px;
  padding: 10px;
  border-radius: 16px;
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.28px;
  color: var(--background-color);
  border: none;
  background-color: var(--text-color);

  &:hover,
  &:focus {
    background-color: var(--white-1);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 32px;
  }
`;

export const Svg = styled.svg`
  margin-right: 10px;
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

  @media screen and (min-width: 768px) {
  }

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

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
    height: 32px;
    font-size: 14px;
    margin: auto;
    letter-spacing: 0.56px;
    margin-bottom: 32px;
  }
`;
