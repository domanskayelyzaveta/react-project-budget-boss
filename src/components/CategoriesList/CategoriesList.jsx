import React, { useState } from 'react';
import css from './CategoriesList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  requestExpenseCategories,
  requestIncomeCategories,
} from 'redux/thunks';

export const CategoriesList = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.accessToken);

  const incomeCategoriesArray = useSelector(
    state => state.categories.incomeCategories
  );
  const expenseCategoriesArray = useSelector(
    state => state.categories.expenseCategories
  );

  const [currentCategoryType, setCurrentCategoryType] = useState('income');

  const handleRequestIncome = () => {
    setCurrentCategoryType('income');
    dispatch(requestIncomeCategories(token));
  };

  const handleRequestExpense = () => {
    setCurrentCategoryType('expense');
    dispatch(requestExpenseCategories(token));
  };

  const visibleCategoriesArray =
    currentCategoryType === 'income'
      ? incomeCategoriesArray
      : expenseCategoriesArray;

  return (
    <div className={css.categoriesListContainer}>
      <div className={css.buttonsContainer}>
        <button
          type="button"
          onClick={handleRequestIncome}
          className={css.buttonCategory}
        >
          ❮
        </button>
        {currentCategoryType === 'income' ? <p>Income</p> : <p>Expense</p>}
        <button
          type="button"
          onClick={handleRequestExpense}
          className={css.buttonCategory}
        >
          ❯
        </button>
      </div>

      <ul>
        {visibleCategoriesArray && visibleCategoriesArray.length > 0
          ? visibleCategoriesArray.map((category, index) => (
              <li key={index}>{category}</li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default CategoriesList;
