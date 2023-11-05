import { StyledBtn } from 'components/IconWithButton/IconWithButton.styled';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../images/sprite.svg';
import {
  deleteExpenseTransactionThunk,
  deleteIncomeTransactionThunk,
} from 'redux/thunks';
import Modal from 'components/Modal/Modal';

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
      <li key={transaction._id}>
        <div>
          <div>{transaction.description}</div>
          <div>
            <div>{transaction.date}</div>
            <div>{transaction.category}</div>
          </div>
        </div>
        <div>{transaction.amount}</div>
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
      </li>
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
