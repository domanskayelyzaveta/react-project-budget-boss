import styled from 'styled-components';

export const StyledBalanceAmountInput = styled.input`
  border-right: transparent !important;
  border-radius: 22px 0px 0px 22px;
  height: 44px;
  text-align: right;
  padding-right: 16px;
  background: transparent;
  border: 2px solid var(--grey8F);
  color: var(--text-color);
  width: 130px;

  @media screen and (min-width: 768px) {
    text-align: right;
    width: 125px;
    padding: 13px 0;
    padding-right: 12px;
    margin: 0;
    border-radius: 16px;
    border-right: 2px grey solid !important;
  }
`;
// @media screen and (min-width: 768px) {
//     display: flex;
//   }
export const BalanceFormWrapper = styled.form`
  // display: flex;
  // align-items: center;
  // gap: 20px;
  // color: var(--text-color);
  // color: #c7ccdc;

  // text-align: center;
  // font-family: Roboto;
  // font-size: 12px;
  // font-style: normal;
  // font-weight: 500;
  // line-height: normal;
  // letter-spacing: 0.24px;
  gap: 0px;
  display: flex;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 20px;
    color: var(--text-color);
    color: #c7ccdc;

    text-align: center;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.24px;
  }
`;

export const StyledConfirmButton = styled.button`
  // width: 141px;
  // padding: 13.5px 17px;
  // border-radius: 16px;
  // border: 2px solid var(--grey8F);
  // box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.25);
  // background: transparent;
  // color: var(--grey8F);

  // text-align: center;
  // font-family: Roboto;
  // font-size: 12px;
  // font-style: normal;
  // font-weight: 700;
  // line-height: normal;
  // letter-spacing: 0.24px;
  // text-transform: uppercase;

  border-left: none;
  border-radius: 0px 22px 22px 0px;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.24px;
  text-transform: uppercase;
  border: 2px solid var(--grey8F);
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.25);
  background: transparent;
  width: 130px;
  height: 44px;
  padding: 13.5px 17px;
  color: var(--white-1);

  @media screen and (min-width: 768px) {
    border-radius: 16px;
    text-align: center;
  }
`;
