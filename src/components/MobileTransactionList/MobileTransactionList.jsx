import { StyledBtn } from 'components/IconWithButton/IconWithButton.styled';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../images/sprite.svg';
import {
  deleteExpenseTransactionThunk,
  deleteIncomeTransactionThunk,
} from 'redux/thunks';
import Modal from 'components/Modal/Modal';
import {
  DivMobTransaction,
  MobileTransactionListDiv,
  StyledDataAndCategoryDiv,
  StyledLi,
  StyledMobTransactionCategory,
  StyledMobTransactionDate,
  StyledMobTransactionDescription,
  StyledPriceDiv,
} from './MobileTransactionList.styled';
import { AbsoluteLine } from 'components/CategoriesList/CategoriesList.styled';

const MobileTransactionList = ({ category }) => {
  const incomeTransactionList = useSelector(state => state.income.incomes);
  const expenseTransactionList = useSelector(state => state.expenses.expenses);
  const [id, setId] = useState(null);

  const dispatch = useDispatch();
  const handleDeleteTransaction = id => {
    if (category === 'income') {
      dispatch(deleteIncomeTransactionThunk(id));
    } else {
      dispatch(deleteExpenseTransactionThunk(id));
    }
    setIsModalOpen(!isModalOpen);
    setId(null);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  let transactionList;
  if (category === 'income') {
    transactionList = incomeTransactionList;
  } else {
    transactionList = expenseTransactionList;
  }

  const transactionListForRender = transactionList
    ?.toReversed()
    .map(transaction => (
      <StyledLi key={transaction._id}>
        <MobileTransactionListDiv>
          <div>
            <StyledMobTransactionDescription>
              {transaction.description}
            </StyledMobTransactionDescription>
            <StyledDataAndCategoryDiv>
              <StyledMobTransactionDate>
                {transaction.date}
              </StyledMobTransactionDate>
              <StyledMobTransactionCategory>
                {transaction.category}
              </StyledMobTransactionCategory>
            </StyledDataAndCategoryDiv>
          </div>
          <DivMobTransaction>
            <StyledPriceDiv
              style={{
                color: category === 'income' ? '#60C470' : '#FE4566',
              }}
              align="center"
            >
              {category === 'income'
                ? `${transaction.amount.toFixed(2)} UAH`
                : `- ${transaction.amount.toFixed(2)} UAH`}
            </StyledPriceDiv>
            <StyledBtn
              onClick={() => {
                handleModalOpen();
                setId(transaction._id);
              }}
            >
              <svg width="16" height="16">
                <use href={`${sprite}#icon-trash-bin`} />
              </svg>
            </StyledBtn>
          </DivMobTransaction>
        </MobileTransactionListDiv>
      </StyledLi>
    ));

  return (
    <>
      {transactionListForRender}
      {isModalOpen && (
        <Modal
          children={<p>Are you sure?</p>}
          incomeEvent={handleDeleteTransaction}
          onCloseModal={handleModalOpen}
          id={id}
        ></Modal>
      )}
    </>
  );
};

export default MobileTransactionList;
