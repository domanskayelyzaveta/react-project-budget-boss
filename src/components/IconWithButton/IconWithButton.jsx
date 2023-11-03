import React from 'react';
import sprite from '../../images/sprite.svg';
import styled from 'styled-components';

function IconWithButton({ iconName, onClick }) {
  return (
    <StyledToReportsBtn onClick={onClick}>
      <div>
        Reports
        <svg width="16" height="16">
          <use href={`${sprite}#icon-bar_chart-24px`} />
        </svg>
      </div>
    </StyledToReportsBtn>
  );
}

export default IconWithButton;

const StyledToReportsBtn = styled.button`
border:none;
background:transparent;

`