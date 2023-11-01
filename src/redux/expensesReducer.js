import { createSlice } from '@reduxjs/toolkit';
import {
  addTransactionThunk,
  deleteTransactionThunk,
  requestExpenseCategoriesThunk
} from './thunks';

const initialState = {
  expenses: [],
  monthStats: null,
};

export const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  extraReducers: builder =>
    builder
      // ------------GET CATEGORIES------------
      .addCase(requestExpenseCategoriesThunk.fulfilled, (state, { payload }) => {
        // state.expenses = payload;
      })

      // ------------ADD TRANSACTION------------
      .addCase(addTransactionThunk.fulfilled, (state, { payload }) => {
        state.expenses.push(payload.transaction);
      })

      // ------------DELETE TRANSACTION------------
      .addCase(deleteTransactionThunk.fulfilled, (state, { payload }) => {
        state.expenses = state.expenses.filter(item => item.id !== payload);
      }),

  // .addMatcher(
  //   isAnyOf(
  //     fetchExpenseCategoriesThunk.pending,
  //     addTransactionThunk.pending,
  //     deleteTransactionThunk.pending
  //   ),

  //   state => {
  //     state.contacts.isLoading = true;
  //     state.contacts.error = null;
  //   }
  // )
  // .addMatcher(
  //   isAnyOf(
  //     fetchExpenseCategoriesThunk.rejected,
  //     addTransactionThunk.rejected,
  //     deleteTransactionThunk.rejected
  //   ),

  //   (state, { payload }) => {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = payload;
  //   }
  // )
  // .addMatcher(
  //   isAnyOf(
  //     fetchExpenseCategoriesThunk.fulfilled,
  //     addTransactionThunk.fulfilled,
  //     deleteTransactionThunk.fulfilled
  //   ),

  //   state => {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = null;
  //   }
  // ),
});

export const expensesReducer = expensesSlice.reducer;
