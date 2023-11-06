import React, { useEffect, useState } from 'react';
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
  AbsoluteLine,
  AbsoluteLine1,
  AbsoluteLine2,
  AbsoluteLine3,
  Btn,
  BtnContainer,
  CategoryP,
  ComponentUl,
  ContainerList,
  DivContainer,
  Image,
  ItemLi,
  P,
  TitleTwo,
} from './CategoriesList.styled';

export const CategoriesList = ({
  data,
  categoryChartKeys,
  categoryChartValue,
}) => {
  const [currentCategoryType, setCurrentCategoryType] = useState('expense');
  const [activeItem, setActiveItem] = useState(0);
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
    setActiveItem(null);
  };

  const handleClick = (element, index) => {
    setActiveItem(index);
    currentCategoryType === 'expense'
      ? categoryChartKeys(element)
      : categoryChartValue(element);
  };

  useEffect(() => {
    if (currentCategoryType === 'expense' && expensesArray.length > 0) {
      handleClick(expensesArray[0].categories, 0);
    }
    // eslint-disable-next-line
  }, [data, currentCategoryType]);

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
      <ContainerList>
        <ComponentUl>
          {currentCategoryType === 'expense'
            ? expensesArray.map((element, index) => {
                return (
                  <ItemLi key={index}>
                    <P>{element.total}.00</P>
                    <Image
                      src={element.image}
                      alt={element.categories}
                      onClick={() => handleClick(element.categories, index)}
                      $primaryImage={activeItem === index}
                    />

                    <CategoryP>{element.categories.toUpperCase()}</CategoryP>
                  </ItemLi>
                );
              })
            : incomesArray.map((element, index) => {
                return (
                  <ItemLi key={index}>
                    <P>{element.total}.00</P>
                    <Image
                      src={element.image}
                      alt={element.categories}
                      onClick={() => handleClick(element.categories, index)}
                      $primaryImage={activeItem === index}
                    />
                    <CategoryP>{element.categories.toUpperCase()}</CategoryP>
                  </ItemLi>
                );
              })}
        </ComponentUl>
      </ContainerList>
      <AbsoluteLine width="265" height="13">
        <use href={`${sprite}#horizontal-line`} />
      </AbsoluteLine>
      <AbsoluteLine1 width="265" height="13">
        <use href={`${sprite}#horizontal-line`} />
      </AbsoluteLine1>
      <AbsoluteLine2 width="265" height="13">
        <use href={`${sprite}#horizontal-line`} />
      </AbsoluteLine2>
      <AbsoluteLine3 width="265" height="13">
        <use href={`${sprite}#horizontal-line`} />
      </AbsoluteLine3>
    </DivContainer>
  );
};

export default CategoriesList;
