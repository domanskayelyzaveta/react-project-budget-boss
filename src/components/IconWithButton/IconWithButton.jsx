import React from 'react';
import sprite from '../../images/sprite.svg';
import styled from 'styled-components';
import { StyledBtn } from './IconWithButton.styled';

const IconWithButton = ({ iconName }) => {
  return (
    <StyledBtn>
      <div>
        Reports
        <svg width="16" height="16">
          <use href={`${sprite}${iconName}`} />
        </svg>
      </div>
    </StyledBtn>
  );
};

export default IconWithButton;
