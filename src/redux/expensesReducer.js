import { createSlice } from '@reduxjs/toolkit';
import {
  addExpenseTransactionThunk,
  deleteTransactionThunk,
  getExpensesTransactionsThunk,
} from './thunks';

const initialState = {
  expenses: null,
  monthStats: null,
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
        state.monthStats = payload.monthsStats;
      })

      // ------------ADD TRANSACTION------------
      .addCase(addExpenseTransactionThunk.fulfilled, (state, { payload }) => {
        state.expenses.push(payload.transaction);
      })

      // ------------DELETE TRANSACTION------------
      .addCase(deleteTransactionThunk.fulfilled, (state, { payload }) => {
        state.expenses = state.expenses.filter(item => item.id !== payload);
      }),
});

export const expensesReducer = expensesSlice.reducer;
