import React, { useState } from 'react';
import css from './CategoriesList.module.css';
import sprite from '../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  requestExpenseCategoriesThunk,
  requestIncomeCategoriesThunk,
} from 'redux/thunks';
import Products from '../../images/icons/Products.webp';
import Alcohol from '../../images/icons/Alcohol.webp';
import Health from '../../images/icons/Health.webp';

export const CategoriesList = () => {
  const [currentCategoryType, setCurrentCategoryType] = useState('');

  const dispatch = useDispatch();
  const token = useSelector(state => state.user.accessToken);
  const arrayOfImages = [Products, Alcohol, Health];

  const incomeCategoriesArray = useSelector(
    state => state.categories.incomeCategories
  );
  const expenseCategoriesArray = useSelector(
    state => state.categories.expenseCategories
  );

  const handleRequestIncome = () => {
    dispatch(requestIncomeCategoriesThunk(token));
    setCurrentCategoryType('income');
  };
  
  const handleRequestExpense = () => {
    dispatch(requestExpenseCategoriesThunk(token));
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
        {currentCategoryType === 'income' ? <p>Income</p> : <p>Expense</p>}
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
        {currentCategoryType === 'income' && incomeCategoriesArray !== null
          ? incomeCategoriesArray.map((element, index) => (
              <li key={index}>
                <p>{element}</p>
                <img src="" alt="" />
              </li>
            ))
          : null}
      </ul>
      <ul>
        {currentCategoryType === 'expense' && expenseCategoriesArray !== null
          ? arrayOfImages.map((element, index) => (
              <li key={index}>
                <p>{expenseCategoriesArray[index]}</p>
                <img src={element} alt={`${element} icon`} />
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default CategoriesList;
