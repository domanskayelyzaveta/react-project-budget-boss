import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  inset: 0;
  z-index: 1111120;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  background-color: var(--grey47);
  position: relative;
  display: flex;
  width: 380px;
  height: 175px;
  border-radius: 16px;
  box-shadow: 0px 2px 14px 0px rgba(132, 132, 132, 0.2) inset;
`;
export const Childrens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 80vw;
  height: 80vh;
  padding: 10px 30px;
  overflow: hidden;

  p {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const StyledButtonClose = styled.button`
  position: absolute;
  padding: 0;
  width: 32px;
  height: 32px;
  top: 8px;
  right: 8px;

  border: none;
  background: transparent;
  transition: all 0.1s ease-in;
  &:hover {
    cursor: pointer;
    stroke: var(--button);
  }
`;
