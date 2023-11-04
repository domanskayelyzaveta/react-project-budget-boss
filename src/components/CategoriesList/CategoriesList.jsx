import React, { useState } from 'react';
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
import {
  Btn,
  BtnContainer,
  CategoryP,
  ComponentUl,
  DivContainer,
  ItemLi,
  P,
  TitleTwo,
} from './CategoriesList.styled';

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
    <DivContainer>
      <BtnContainer>
        <Btn type="button" onClick={handleToggleCategoryType}>
          <svg width="13" height="13">
            <use href={`${sprite}#arrow-toleft`} />
          </svg>
        </Btn>
        {currentCategoryType === 'income' ? (
          <TitleTwo>INCOME</TitleTwo>
        ) : (
          <TitleTwo>EXPENSES</TitleTwo>
        )}
        <Btn type="button" onClick={handleToggleCategoryType}>
          <svg width="13" height="13">
            <use href={`${sprite}#arrow-toright`} />
          </svg>
        </Btn>
      </BtnContainer>
      <div>
        <ComponentUl>
          {currentCategoryType === 'expense'
            ? expensesArray.map((element, index) => {
                return (
                  <ItemLi key={index}>
                    <P>{element.total}.00</P>
                    <img src={element.image} alt="" />
                    <CategoryP>{element.categories.toUpperCase()}</CategoryP>
                  </ItemLi>
                );
              })
            : incomesArray.map((element, index) => {
                return (
                  <ItemLi key={index}>
                    <P>{element.total}.00</P>
                    <img src={element.image} alt="" />
                    <CategoryP>{element.categories.toUpperCase()}</CategoryP>
                  </ItemLi>
                );
              })}
        </ComponentUl>
      </div>
    </DivContainer>
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
