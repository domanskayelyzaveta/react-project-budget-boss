import styled from 'styled-components';
export const MobileDashboardBalanceFormWrapper = styled.div`
  width: 100%;
  /* height: calc(100vh - 6vh); */
  height: calc(var(--vh, 1vh) * 94);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const StyledUpperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
`;
export const AddTransactionWrapper = styled.div``;

export const ReportAndStatisticsWrapper = styled.div``;

export const BalanceWrapperMobil = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--white-1);

  margin-bottom: 41px;
  gap: 8px;
  font-size: 12px;
`;

export const StyledAddTransactionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  border: none;
  background: transparent;
  color: var(--text-color);

  text-align: center;

  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.24px;
  text-transform: uppercase;
`;

export const StyledAddTransactionButtonIcon = styled.span`
  // background-image: url('../../images/sprite.svg#icon-plus');
  // width: 24px;
  // height: 24px;
  // background-size: 100% 100%;
  // background-color: green;
  // display: inline-block;
  // border-radius: 50%;
  // fill: white;
  // margin-right: 10px;
`;

export const StyledAddTransactionButtonText = styled.span``;

export const StyledMobileButton = styled.button`
  /* margin-top: auto; */
  /* background: ${props => (props.$active ? 'green' : 'transparent')}; */
  border: none;
  box-shadow: ${props => (props.$active ? '0px 0px 6px 0px #41a350' : 'none')};
  background: #383847;
  color: ${props =>
    props.$active ? 'var(--button) !important' : 'var(--text-color)!important'};
  border-top: ${props => (props.$active ? '1px solid var(--button)' : 'none')};
  border-right: ${props =>
    props.$name === 'expense' && props.$active
      ? '1px solid var(--button)'
      : 'none'};
  border-left: ${props =>
    props.$name === 'income' && props.$active
      ? '1px solid var(--button)'
      : 'none'};
  width: 50%;
  border-radius: ${props =>
    props.$name === 'income' ? '16px 0px 0px 0px' : '0px 16px 0px 0px'};

  height: 53px;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.24px;
  text-transform: uppercase;
  color: var(--text-color);
`;

// export const StyledMobileButtonLeft = styled.button`
//   border: none;
//   border-radius: 0px 16px 0px 0px;
// width: 159px;
// height: 53px;
// text-align: center;
// font-size: 12px;
// font-weight: 700;
// letter-spacing: 0.24px;
// text-transform: uppercase;
// color: var(--text-color);
//   background: linear-gradient(245deg, #383847 14.1%, #2d2d38 89.51%);
//   &:hover {
//     border-radius: 0px 16px 0px 0px;
//     border-top: 1px solid var(--button);
//     border-right: 1px solid var(--button);
//     box-shadow: 0px 0px 6px 0px #41a350;
//     background: #383847;
//     color: var(--button);
//   }

//   &:focus {
//     border-radius: 0px 16px 0px 0px;
//     border-top: 1px solid var(--button);
//     border-right: 1px solid var(--button);
//     box-shadow: 0px 0px 6px 0px #41a350;
//     background: #383847;
//     color: var(--button);
//   }

// &:active {
//   border-radius: 0px 16px 0px 0px;
//   border-top: 1px solid var(--button);
//   border-right: 1px solid var(--button);
//   box-shadow: 0px 0px 6px 0px #41a350;
//   background: #383847;
//   color: var(--button);
// }
// `;
// export const StyledMobileButtonRight = styled.button`
//   border: none;
//   border-right: transparent !important;
//   border-radius: 16px 0px 0px 0px;
//   width: 159px;
//   height: 53px;
//   text-align: center;
//   font-size: 12px;
//   font-weight: 700;
//   letter-spacing: 0.24px;
//   text-transform: uppercase;
//   color: var(--text-color);
//   background: linear-gradient(245deg, #383847 14.1%, #2d2d38 89.51%);

//   &:hover {
//     border-radius: 16px 0px 0px 0px;
//     border-top: 1px solid var(--button);
//     border-right: 1px solid var(--button);
//     box-shadow: 0px 0px 6px 0px #41a350;
//     background: #383847;
//     color: var(--button);
//   }

//   &:focus {
//     border-radius: 16px 0px 0px 0px;
//     border-top: 1px solid var(--button);
//     border-right: 1px solid var(--button);
//     box-shadow: 0px 0px 6px 0px #41a350;
//     background: #383847;
//     color: var(--button);
//   }

//   &:active {
//     border-radius: 16px 0px 0px 0px;
//     border-top: 1px solid var(--button);
//     border-right: 1px solid var(--button);
//     box-shadow: 0px 0px 6px 0px #41a350;
//     background: #383847;
//     color: var(--button);
//   }
// `;

export const StyledPlusSvg = styled.svg`
  /* border: 1px solid var(--green);
  border-radius: 50%;
  width: 16px;
  height: 16px;
  top: 0px; */
`;

export const StyledSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  border-radius: 50%;
  background-color: var(--button);
  width: 24px;
  height: 24px;
`;

export const DatePickerWrapper = styled.div`
  /* margin-bottom:auto; */
`;

export const StyledButtonDiv = styled.div`
  display: flex;
  /* position: absolute;
  bottom: 0; */
  /* margin-top: 20px; */
  margin-top: auto;
`;

export const StyledBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  bottom: 0;
  width: 100%;
  /* height: 40%; */
  height: calc(var(--vh, 1vh) * 40);
  overflow-y: scroll;
  gap: 20px;
`;

export const TransactionMobileListWrapper = styled.div`
  overflow-y: auto;
  justify-content: space-evenly;
  width: 100%;
  padding: 0px 16px 0px 20px;
  /* margin-bottom: 10px; */
  flex: 1;
`;

// export const TransactionMobileListWrapper = styled.ul`
//   height: 190px;
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   height: 180px;
//   width: 100%;
// `;

export const StyledUl = styled.ul`
  padding-left: 0px;
  padding-top: 20px;
`;
