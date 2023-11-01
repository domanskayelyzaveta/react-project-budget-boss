import React, { useState } from 'react';
import css from './CategoriesList.module.css';
import sprite from '../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  requestExpenseCategoriesThunk,
  requestIncomeCategoriesThunk,
} from 'redux/thunks';
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
import { selectToken } from 'redux/selectors';

export const CategoriesList = () => {
  const [currentCategoryType, setCurrentCategoryType] = useState('');
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
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
  const object = {
    incomes: {
      total: 12000,
      incomesData: {
        Salary: {
          total: 12000,
          My: 5000,
          Wife: 7000,
        },
      },
    },
    expenses: {
      total: 5200,
      incomesData: {
        Products: {
          total: 2000,
          Repaire: 3500,
          Cleaning: 500,
        },
        Alcohol: {
          total: 17000,
          Repaire: 3500,
          Cleaning: 500,
        },
        Entertainment: {
          total: 50,
          Repaire: 3500,
          Cleaning: 500,
        },
        Health: {
          total: 50000,
          Repaire: 3500,
          Cleaning: 500,
        },
        Transport: {
          total: 15,
          Repaire: 3500,
          Cleaning: 500,
        },
        'For home': {
          total: 6000,
          Flowers: 150,
          Desk: 1050,
        },
        Technics: {
          total: 30,
          Flowers: 150,
          Desk: 1050,
        },
        Utilities: {
          total: 1200,
          Flowers: 150,
          Desk: 1050,
        },
        'Sports and hobby': {
          total: 300,
          Flowers: 150,
          Desk: 1050,
        },
        Education: {
          total: 200,
          Flowers: 150,
          Desk: 1050,
        },
        Other: {
          total: 100,
          Flowers: 150,
          Desk: 1050,
        },
      },
    },
  };

  const incomesData = Object.keys(object.expenses.incomesData)
    .map(key => {
      object.expenses.incomesData[key].categories = key;
      return object.expenses.incomesData[key];
    })
    .sort((a, b) => b.total - a.total);

  // const incomeCategoriesArray = useSelector(
  //   state => state.categories.incomeCategories
  // );
  // const expenseCategoriesArray = useSelector(
  //   state => state.categories.expenseCategories
  // );

  const handleRequestIncome = () => {
    // dispatch(requestIncomeCategoriesThunk(token));
    setCurrentCategoryType('income');
  };

  const handleRequestExpense = () => {
    // dispatch(requestExpenseCategoriesThunk(token));
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
      <ul>
        {/* {currentCategoryType === 'income' && incomeCategoriesArray !== null
          ? incomeCategoriesArray.map((element, index) => (
              <li key={index}>
                <p>{element}</p>
                <img src="" alt="" />
              </li>
            ))
          : null} */}
      </ul>
      <div className={css.ulContainer}>
        <ul className={css.categoriesList}>
          {currentCategoryType === 'expense' && incomesData !== null
            ? incomesData.map((element, index) => {
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
            : null}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesList;
