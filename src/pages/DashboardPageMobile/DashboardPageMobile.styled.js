import styled from 'styled-components';
export const MobileDashboardBalanceFormWrapper = styled.div`
  width: 100%;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  // height: 511px;
  // width: 320px;
  // background-color: var(--grey47);
  // outline: 2px solid red;
`;

export const AddTransahtionWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: 145px;
  height: 24px;
  margin: 20px 87px 24px 88px;
  /* outline: 2px solid green; */
`;

export const ReportAndStatisticsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 84px;
  height: 24px;
  margin: 0 118px 30px 118px;
`;

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
  // position: relative;
  // background-color: transparent;
  // color: #fff;
  // padding: 10px 20px;
  // border: none;
  // cursor: pointer;
  // font-size: 16px;
  // border-radius: 4px;
  // display: flex;
  // align-items: center;

  background-color: transparent;
  color: var(--text-color);
  border: none;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 30px;
  align-items: flex-start;
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

export const StyledAddTransactionButtonText = styled.span`
  flex: 1;
  flex-wrap: nowrap;
  text-transform: uppercase;
  color: #f6f7fb;

  margin-left: 8px;
  margin-top: 4px;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.24px;
  text-transform: uppercase;
`;

export const StyledMobileButton = styled.button`
  margin-top: auto;
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
  border: 1px solid var(--green);
  border-radius: 50%;
  width: 16px;
  height: 16px;
  top: 0px;
`;

export const StyledSpan = styled.span`
  position: relative;
  border: none;
  border-radius: 50%;
  background-color: var(--button);
  width: 24px;
  height: 24px;
  padding-top: 4px;
  margin-bottom: 30px;
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
  margin-bottom: auto;
  /* position:absolute;
  bottom: 0; */
  width: 100%;
  height: 40vh;
  overflow-y: scroll;
  gap: 20px;
`;

export const TransactionMobileListWrapper = styled.div`
  /* height: 21vh; */
  overflow-y: auto;
  justify-content: space-evenly;
  width: 100%;
  padding: 0px 16px 0px 20px;
  margin-bottom: 10px;
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
