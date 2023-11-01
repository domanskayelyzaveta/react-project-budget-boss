import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: var(--text-color);
  color: var(--background-color);
  border-radius: 16px;
  border: none;
  padding: 10px;

  &:hover,
  &:focus {
    background-color: var(--white-1);
  }
`;
