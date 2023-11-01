const { createSlice } = require('@reduxjs/toolkit');
const {
  requestIncomeCategories,
  requestExpenseCategories,
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

      .addCase(requestIncomeCategories.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(requestIncomeCategories.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.isSignedIn = true;
        state.incomeCategories = action.payload;
      })
      .addCase(requestIncomeCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //------------ ExpenseCategories ---------------
      .addCase(requestExpenseCategories.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(requestExpenseCategories.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.isSignedIn = true;
        state.expenseCategories = action.payload;
      })
      .addCase(requestExpenseCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
