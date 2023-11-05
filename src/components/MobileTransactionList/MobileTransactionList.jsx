import React from 'react';
import { useSelector } from 'react-redux';

const MobileTransactionList = ({ category }) => {
  const incomeTransactionList = useSelector(state => state.income.incomes);
  const expenseTransactionList = useSelector(state => state.expenses.expenses);

  let transactionList;
  console.log(category === 'income');
  if (category === 'income') {
    transactionList = incomeTransactionList;
  } else {
    transactionList = expenseTransactionList;
  }

  return transactionList?.map(transaction => (
    <li key={transaction._id}>
      <div>
        <div>{transaction.description}</div>
        <div>
          <div>{transaction.date}</div>
          <div>{transaction.category}</div>
        </div>
      </div>
      <div>{transaction.amount}</div>
      <button>trash bin</button>
    </li>
  ));
};

export default MobileTransactionList;
