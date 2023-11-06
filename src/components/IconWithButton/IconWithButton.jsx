import sprite from '../../images/sprite.svg';
import {
  StyledBtn,
  StyledReportsIconWrapper,
  StyledReportsParagraph
} from './IconWithButton.styled';

const IconWithButton = ({ iconName }) => {
  return (
    <StyledBtn>
      <StyledReportsIconWrapper>
        <StyledReportsParagraph>Reports</StyledReportsParagraph>
        <svg width="16" height="16">
          <use href={`${sprite}${iconName}`} />
        </svg>
      </StyledReportsIconWrapper>
    </StyledBtn>
  );
};

export default IconWithButton;
