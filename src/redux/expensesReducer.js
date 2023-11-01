import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { requestExpenseCategories } from './thunks';

const initialState = {
  incomes: [],
  monthStats: null,
};

export const contactsSlice = createSlice({
  name: 'expenses',
  initialState,
  extraReducers: builder =>
    builder
      // ------------GET CATEGORIES------------
      .addCase(requestExpenseCategories.fulfilled, (state, { payload }) => {
        state.incomes = payload;
      })

      // ------------ADD TRANSACTION------------
      .addCase(addTransactionThunk.fulfilled, (state, { payload }) => {
        state.incomes.push(payload);
      })

      // ------------DELETE TRANSACTION------------
      .addCase(deleteTransactionThunk.fulfilled, (state, { payload }) => {
        state.incomes = state.incomes.filter(item => item.id !== payload);
      })

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
