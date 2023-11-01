import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchExpenseCategories,
  fetchIncomeCategories,
  fetchLogin,
  fetchPeriodData,
  fetchRegister,
} from 'service/Api';

//---------------registration------------------//

export const registerThunk = createAsyncThunk(
  'user/registerThunk',
  async (userData, thunkAPI) => {
    try {
      const response = await fetchRegister(userData);
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//---------------AUTO-login------------------//

//---------------login------------------//

export const loginThunk = createAsyncThunk(
  'user/loginThunk',
  async (userData, thunkAPI) => {
    try {
      const response = await fetchLogin(userData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//---------------RequestIncomeCategories------------------//
export const requestIncomeCategories = createAsyncThunk(
  'transaction/requestIncomeCategories',
  async (token, thunkAPI) => {
    try {
      const response = await fetchIncomeCategories(token);
      // console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//---------------RequestExpenseCategories------------------//
export const requestExpenseCategories = createAsyncThunk(
  'transaction/requestExpenseCategories',
  async (token, thunkAPI) => {
    try {
      const response = await fetchExpenseCategories(token);
      // console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//---------------RequestPeriodData------------------//
export const requestPeriodData = createAsyncThunk(
  'transaction/requestPeriodData',
  async (date, thunkAPI) => {
    try {
      const response = await fetchPeriodData(date);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


//--------------- Dashboard queries------------------//

// export const fetchIncomeCategoriesThunk = createAsyncThunk(
//   'incomeCategories/fetchAll',
//   async (_, thunkAPI) => {
//     const token = thunkAPI.getState().user.accessToken;
//     try {
//       const incomeCategories = await fetchCategories(
//         'expense-categories',
//         token
//       );
//       return incomeCategories;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchExpenseCategoriesThunk = createAsyncThunk(
//   'expenseCategories/fetchAll',
//   async (_, thunkAPI) => {
//     const token = thunkAPI.getState().user.accessToken;
//     try {
//       const incomeCategories = await fetchCategories(
//         'expense-categories',
//         token
//       );
//       return incomeCategories;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
