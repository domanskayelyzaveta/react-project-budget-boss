const { default: styled } = require('styled-components');

export const StyledBtn = styled.button`
  border: none;
  background: transparent;
  color: rgba(199, 204, 220, 0.5);

  @media screen and (min-width: 768px) {
    /* margin-bottom: 60px; */
  }
`;

export const StyledReportsIconWrapper = styled.div`
  display: flex;
`;
export const StyledReportsParagraph = styled.div`
  @media screen and (min-width: 768px) {
    margin-right: 15px;
  }
`;
