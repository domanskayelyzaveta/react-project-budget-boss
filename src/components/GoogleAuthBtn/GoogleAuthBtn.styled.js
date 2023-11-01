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
  margin-bottom: 32px;
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
`;

export const Svg = styled.svg`
  margin-right: 10px;
`;
