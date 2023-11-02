import { createSlice } from '@reduxjs/toolkit';
import {
  addExpenseTransactionThunk,
  deleteExpenseTransactionThunk,
  getExpensesTransactionsThunk
} from './thunks';

const initialState = {
  expenses: null,
  monthsStats: null,
};

export const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  extraReducers: builder =>
    builder
      // ------------GET TRANSACTIONS------------
      .addCase(getExpensesTransactionsThunk.fulfilled, (state, { payload }) => {
        // state.expenses = payload.expenses;
        // state.expenses.monthsStats = payload.monthsStats;
        state.expenses = payload.expenses;
        state.monthsStats = payload.monthsStats;
      })

      // ------------ADD TRANSACTION------------
      .addCase(addExpenseTransactionThunk.fulfilled, (state, { payload }) => {
        state.expenses.push(payload.transaction);
      })

      // ------------DELETE TRANSACTION------------
      .addCase(deleteExpenseTransactionThunk.fulfilled, (state, { payload }) => {
        state.expenses = state.expenses.filter(item => item._id !== payload.id);
      }),
});

export const expensesReducer = expensesSlice.reducer;
