import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  background-color: var(--button);
  font-size: 10px;
  color: rgb(255, 255, 255);
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
  outline: none;
  &:hover {
    background-color: var(--salat);
  }
  .equals, .close {
  grid-column: 3 / 5;
  background-color: rgb(243, 61, 29);
}
.accept {
  grid-column: 1/3;
  background-color: var(--button);
}


.equals:hover, .close:hover {
  background-color: rgb(228, 39, 15);
}

`