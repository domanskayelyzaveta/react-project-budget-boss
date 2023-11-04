import { createGlobalStyle, styled } from 'styled-components';
export const DataBtn = styled.div`
  padding: 6px 12px;
  color: #fff;
  background: #3e85f3;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    margin-top: 33px;
    margin-bottom: 33px;
    padding: 8px 12px;
    font-size: 16px;
  }
`;
export const CalendarGlobalStyles = createGlobalStyle`
  .react-datepicker__wrapper {
    position: relative;
  }

  .react-datepicker {
    font-size:10px;
    position: absolute;
    // left: 50%;
    // top: 150%;
    transform: translate(-1%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 242px;
    height: 258px;
    padding-top: 22px;
    padding-right: 22px;
    padding-left: 22px;
    padding-bottom: 10px;
    border-radius: 30px;
    border: none;
    background: linear-gradient(118deg, #58BB67 3.05%, #368342 125.62%);
  }
  .react-datepicker__month-container {
    float: inherit;
     width: 242px;
    box-sizing: border-box;
  }
  .react-datepicker__input-container input{
    background:transparent;
  }
  .react-datepicker__header {
    position: relative;
   background: linear-gradient(118deg, #58BB67 -4%, #368342 180.62%);
  }
  .react-datepicker__day-names {
    display: flex;
    font-size: 12px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
}
  .react-datepicker__current-month {
    fort-size: 14px;
    font-weight: 700;
    font-family: Roboto;
    letter-spacing: 0.28px;
    margin-bottom: 18px;
    line-height: 20px;
    text-align: center;
    color: white;
    text-transform: uppercase;
  }

  .react-datepicker__day-name {
    margin: 0;
    font-size: 12px;
    font-style: normal;
    font-family: Roboto;
    font-weight: 700;
    margin-bottom: 12px;
    text-align: center;
    color: white;
    letter-spacing: 0.24px;
    text-transform: uppercase;
  }
  .react-datepicker__navigation {
    margin-top: 24px;
    color: white;
    color: white!important;
  }
  .react-datepicker__navigation--previous {
    left: 7px;
    width: 44px;
    height: 18px;
    color: white!important;
  }
  .react-datepicker__navigation--next {
    right: 7px;
    width: 44px;
    height: 18px;
    color: white!important;
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    color: white!important;
  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .react-datepicker__day {
  
    border-radius: 50%;
    color: #F6F7FB70;
    font-size: 12px;
    font-weight: 400;

  }
  .react-datepicker__month {
    display: flex;
    margin-top: 16px;
    flex-direction: column;
    justify-content: space-between;
  }
  .react-datepicker__day--selected {
    background-color:white;
    color:#41964F;;
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
  background-color:white;
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }

.react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }
  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .react-datepicker__triangle {
    visibility: hidden;
  }

  // .react-datepicker__year-read-view--down-arrow, .react-datepicker__month-read-view--down-arrow, .react-datepicker__month-year-read-view--down-arrow, .react-datepicker__navigation-icon::before{
  //   color: #fff!important;
  // }

  // .react-datepicker__navigation:hover *::before {
  //  color: #fff!important;
  // .react-datepicker__navigation:hover *::after {
  //  color: #fff!important;
  // }
`;

export const TitleWrapper = styled.button`
  background: transparent;
  border: none;
  width: 74px;
  font-size: 12px;
  font-weight: 900;
  Line height: normal;
  padding-left: 10px;
  letter-spacing: 0.48px;
  font-family: Roboto;
  color: var(--white-DC);

`;

export const CalendWrapper = styled.div`
  margin-top: 3px;
  display: flex;
`;
