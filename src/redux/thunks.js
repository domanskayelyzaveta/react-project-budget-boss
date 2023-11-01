import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchExpenseCategories,
  fetchIncomeCategories,
  fetchLogin,
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
      console.log(response);
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
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
