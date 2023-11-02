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
  const [arrayOfImagesExpense] = useState({
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
  });

  const [arrayOfImagesIncom] = useState({
    Salary: Salary,
    'Additional income': AdditionalIncome,
  });

  const expensesArray = Object.entries(arrayOfImagesExpense)
    .map(([category, image]) => ({
      categories: category,
      total: data?.expenses.expensesData[category]?.total || 0,
      image: image,
    }))
    .sort((a, b) => b.total - a.total);

  const incomesArray = Object.entries(arrayOfImagesIncom)
    .map(([category, image]) => ({
      categories: category,
      total: data?.incomes.incomesData[category]?.total || 0,
      image: image,
    }))
    .sort((a, b) => b.total - a.total);

  const handleToggleCategoryType = () => {
    setCurrentCategoryType(
      currentCategoryType === 'expense' ? 'income' : 'expense'
    );
  };

  return (
    <div className={css.categoriesListContainer}>
      <div className={css.buttonsContainer}>
        <button
          type="button"
          onClick={handleToggleCategoryType}
          className={css.buttonCategory}
        >
          <svg width="16" height="16">
            <use href={`${sprite}#arrow-toleft`} />
          </svg>
        </button>
        {currentCategoryType === 'income' ? <p>INCOME:</p> : <p>EXPENSE:</p>}
        <button
          type="button"
          onClick={handleToggleCategoryType}
          className={css.buttonCategory}
        >
          <svg width="16" height="16">
            <use href={`${sprite}#arrow-toright`} />
          </svg>
        </button>
      </div>
      <div className={css.ulContainer}>
        <ul className={css.categoriesList}>
          {currentCategoryType === 'expense'
            ? expensesArray.map((element, index) => {
                return (
                  <li key={index} className={css.categoriesListItem}>
                    <p className={css.total}>{element.total}.00</p>
                    <img src={element.image} alt="" className={css.image} />
                    <p className={css.categoryName}>
                      {element.categories.toUpperCase()}
                    </p>
                  </li>
                );
              })
            : null}
        </ul>
        <ul className={css.categoriesList}>
          {currentCategoryType === 'income'
            ? incomesArray.map((element, index) => {
                return (
                  <li key={index} className={css.categoriesListItem}>
                    <p className={css.total}>{element.total}.00</p>
                    <img src={element.image} alt="" className={css.image} />
                    <p className={css.categoryName}>
                      {element.categories.toUpperCase()}
                    </p>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesList;

// const incomesData = Object.keys(object.expenses.expensesData)
//   .map(key => {
//     object.expenses.expensesData[key].categories = key;
//     return object.expenses.expensesData[key];
//   })
//   .sort((a, b) => b.total - a.total);
// console.log(incomesData);
