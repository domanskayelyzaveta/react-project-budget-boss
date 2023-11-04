// import React, { useState } from 'react';
// import css from './CategoriesList.module.css';
// import sprite from '../../images/sprite.svg';
// import Products from '../../images/icons/Products.webp';
// import Transport from '../../images/icons/Transport.webp';
// import ForHome from '../../images/icons/For-home.webp';
// import Alcohol from '../../images/icons/Alcohol.webp';
// import Entertainment from '../../images/icons/Entertainment.webp';
// import Health from '../../images/icons/Health.webp';
// import Technics from '../../images/icons/Technics.webp';
// import Utilities from '../../images/icons/Utilities.webp';
// import SportsAndHobby from '../../images/icons/Sports-and-hobby.webp';
// import Education from '../../images/icons/Education.webp';
// import Other from '../../images/icons/Other.webp';
// import Salary from '../../images/icons/Salary.webp';
// import AdditionalIncome from '../../images/icons/Additional-income.webp';

// export const CategoriesList = ({ data }) => {
//   const [currentCategoryType, setCurrentCategoryType] = useState('expense');
//   const arrayOfImagesExpense = {
//     Products: Products,
//     Alcohol: Alcohol,
//     Entertainment: Entertainment,
//     Health: Health,
//     Transport: Transport,
//     'For home': ForHome,
//     Technics: Technics,
//     Utilities: Utilities,
//     'Sports and hobby': SportsAndHobby,
//     Education: Education,
//     Other: Other,
//   };
//   const arrayOfImagesIncom = {
//     Salary: Salary,
//     'Additional income': AdditionalIncome,
//   };

//   const expensesArray = Object.entries(data?.expenses.expensesData)
//     .map(([categories, data]) => ({
//       categories,
//       ...data,
//     }))
//     .sort((a, b) => b.total - a.total);

//   const incomesArray = Object.entries(data?.incomes.incomesData)
//     .map(([categories, data]) => ({
//       categories,
//       ...data,
//     }))
//     .sort((a, b) => b.total - a.total);

//   // const incomesData = Object.keys(object.expenses.expensesData)
//   //   .map(key => {
//   //     object.expenses.expensesData[key].categories = key;
//   //     return object.expenses.expensesData[key];
//   //   })
//   //   .sort((a, b) => b.total - a.total);
//   // console.log(incomesData);

//   const handleRequestIncome = () => {
//     setCurrentCategoryType('income');
//   };

//   const handleRequestExpense = () => {
//     setCurrentCategoryType('expense');
//   };

//   return (
//     <div className={css.categoriesListContainer}>
//       <div className={css.buttonsContainer}>
//         <button
//           type="button"
//           onClick={handleRequestIncome}
//           className={css.buttonCategory}
//         >
//           <svg width="16" height="16">
//             <use href={`${sprite}#arrow-toleft`} />
//           </svg>
//         </button>
//         {currentCategoryType === 'income' ? <p>INCOME</p> : <p>EXPENSE</p>}
//         <button
//           type="button"
//           onClick={handleRequestExpense}
//           className={css.buttonCategory}
//         >
//           <svg width="16" height="16">
//             <use href={`${sprite}#arrow-toright`} />
//           </svg>
//         </button>
//       </div>
//       <div className={css.ulContainer}>
//         <ul className={css.categoriesList}>
//           {currentCategoryType === 'expense' && expensesArray !== null
//             ? expensesArray.map((element, index) => {
//                 return (
//                   <li key={index} className={css.categoriesListItem}>
//                     <p className={css.total}>{element.total}.00</p>
//                     <img
//                       src={arrayOfImagesExpense[element.categories]}
//                       alt=""
//                     />
//                     <p className={css.categoryName}>
//                       {element.categories.toUpperCase()}
//                     </p>
//                   </li>
//                 );
//               })
//             : incomesArray.map((element, index) => {
//                 return (
//                   <li key={index} className={css.categoriesListItem}>
//                     <p className={css.total}>{element.total}.00</p>
//                     <img src={arrayOfImagesIncom[element.categories]} alt="" />
//                     <p className={css.categoryName}>
//                       {element.categories.toUpperCase()}
//                     </p>
//                   </li>
//                 );
//               })}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default CategoriesList;

//================================++++++++++++++++++++++++++++++++
import React, { useState } from 'react';
import css from './CategoriesList.module.css';
import sprite from '../../images/sprite.svg';
import Products from '../../images/icons/Products.webp';
import Transport from '../../images/icons/Transport.webp';
import ForHome from '../../images/icons/For-home.webp';
import Alcohol from '../../images/icons/Alcohol.webp';
import Entertainment from '../../images/icons/Entertainment.webp';
import Health from '../../images/icons/Health.webp';
import Technics from '../../images/icons/Technics.webp';
import Utilities from '../../images/icons/Utilities.webp';
import SportsAndHobby from '../../images/icons/Sports-and-hobby.webp';
import Education from '../../images/icons/Education.webp';
import Other from '../../images/icons/Other.webp';
import Salary from '../../images/icons/Salary.webp';
import AdditionalIncome from '../../images/icons/Additional-income.webp';

export const CategoriesList = ({ data }) => {
  const [currentCategoryType, setCurrentCategoryType] = useState('expense');
  const arrayOfImagesExpense = {
    Products: Products,
    Alcohol: Alcohol,
    Entertainment: Entertainment,
    Health: Health,
    Transport: Transport,
    'For home': ForHome,
    Technics: Technics,
    Utilities: Utilities,
    'Sports and hobby': SportsAndHobby,
    Education: Education,
    Other: Other,
  };
  const arrayOfImagesIncom = {
    Salary: Salary,
    'Additional income': AdditionalIncome,
  };

  const expensesArray = Object.entries(data?.expenses.expensesData)
    .map(([categories, data]) => ({
      categories,
      ...data,
    }))
    .sort((a, b) => b.total - a.total);

  const incomesArray = Object.entries(data?.incomes.incomesData)
    .map(([categories, data]) => ({
      categories,
      ...data,
    }))
    .sort((a, b) => b.total - a.total);

  // const incomesData = Object.keys(object.expenses.expensesData)
  //   .map(key => {
  //     object.expenses.expensesData[key].categories = key;
  //     return object.expenses.expensesData[key];
  //   })
  //   .sort((a, b) => b.total - a.total);
  // console.log(incomesData);

  const handleRequestIncome = () => {
    setCurrentCategoryType('income');
  };

  const handleRequestExpense = () => {
    setCurrentCategoryType('expense');
  };

  return (
    <div className={css.categoriesListContainer}>
      <div className={css.buttonsContainer}>
        <button
          type="button"
          onClick={handleRequestIncome}
          className={css.buttonCategory}
        >
          <svg width="16" height="16">
            <use href={`${sprite}#arrow-toleft`} />
          </svg>
        </button>
        {currentCategoryType === 'income' ? <p>INCOME</p> : <p>EXPENSE</p>}
        <button
          type="button"
          onClick={handleRequestExpense}
          className={css.buttonCategory}
        >
          <svg width="16" height="16">
            <use href={`${sprite}#arrow-toright`} />
          </svg>
        </button>
      </div>
      <div className={css.ulContainer}>
        <ul className={css.categoriesList}>
          {currentCategoryType === 'expense' && expensesArray !== null
            ? expensesArray.map((element, index) => {
                return (
                  <li key={index} className={css.categoriesListItem}>
                    <p className={css.total}>{element.total}.00</p>
                    <img
                      src={arrayOfImagesExpense[element.categories]}
                      alt=""
                    />
                    <p className={css.categoryName}>
                      {element.categories.toUpperCase()}
                    </p>
                  </li>
                );
              })
            : incomesArray.map((element, index) => {
                return (
                  <li key={index} className={css.categoriesListItem}>
                    <p className={css.total}>{element.total}.00</p>
                    <img src={arrayOfImagesIncom[element.categories]} alt="" />
                    <p className={css.categoryName}>
                      {element.categories.toUpperCase()}
                    </p>
                  </li>
                );
              })}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesList;
