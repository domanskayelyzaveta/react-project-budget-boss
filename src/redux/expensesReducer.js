import { createSlice } from '@reduxjs/toolkit';
import {
  addExpenseTransactionThunk,
  deleteExpenseTransactionThunk,
  getExpensesTransactionsThunk,
} from './thunks';

const initialState = {
  expenses: null,
  monthsStats: null,
  balance: 0,
};

export const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  extraReducers: builder =>
    builder
      // ------------GET TRANSACTIONS------------
      .addCase(getExpensesTransactionsThunk.fulfilled, (state, { payload }) => {

        state.expenses = payload.expenses;
        state.monthsStats = payload.monthsStats;
      })

      // ------------ADD TRANSACTION------------
      .addCase(addExpenseTransactionThunk.fulfilled, (state, { payload }) => {

        state.expenses.push(payload.transaction);
        state.balance = payload.newBalance;
        // state.monthsStats = payload.monthsStats;
        // state.user.balance = payload.newBalance
      })

      // ------------DELETE TRANSACTION------------
      .addCase(
        deleteExpenseTransactionThunk.fulfilled,
        (state, { payload }) => {
          state.expenses = state.expenses.filter(
            item => item._id !== payload.id
          );
          // state.user.balance = payload.newBalance
        }
      ),
});

export const expensesReducer = expensesSlice.reducer;
