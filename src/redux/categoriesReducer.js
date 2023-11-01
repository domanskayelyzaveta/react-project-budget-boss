const { createSlice } = require('@reduxjs/toolkit');
const {
  requestIncomeCategoriesThunk,
  requestExpenseCategoriesThunk,
} = require('./thunks');

const initialState = {
  isLoading: false,
  error: null,
  isSignedIn: false,
  incomeCategories: null,
  expenseCategories: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: builder => {
    builder
      //------------ IncomeCategories ---------------

      .addCase(requestIncomeCategoriesThunk.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(requestIncomeCategoriesThunk.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.isSignedIn = true;
        state.incomeCategories = action.payload;
      })
      .addCase(requestIncomeCategoriesThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //------------ ExpenseCategories ---------------
      .addCase(requestExpenseCategoriesThunk.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(requestExpenseCategoriesThunk.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.isSignedIn = true;
        state.expenseCategories = action.payload;
      })
      .addCase(requestExpenseCategoriesThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
