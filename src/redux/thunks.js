import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addTransaction,
  deleteTransaction,
  fetchExpenseCategories,
  fetchIncomeCategories,
  fetchLogin,
  fetchPeriodData,
  fetchRegister,
  getTransactions,
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
export const requestIncomeCategoriesThunk = createAsyncThunk(
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
export const requestExpenseCategoriesThunk = createAsyncThunk(
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

export const addTransactionThunk = createAsyncThunk(
  'transaction/addTransaction',
  async (data, thunkAPI) => {
    const token = thunkAPI.getState().user.accessToken;
    try {
      const addNewTransaction = addTransaction(data, token);
      return addNewTransaction;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTransactionThunk = createAsyncThunk(
  'transaction/deleteTransaction',
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().user.accessToken;
    try {
      const delTransaction = await deleteTransaction(id, token);
      return delTransaction;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTransactionsThunk = createAsyncThunk(
  'transaction/getTransactions',
  async (category, thunkAPI) => {
    const token = thunkAPI.getState().user.accessToken;
    try {
      const getAllTransactions = await getTransactions(category, token);
      return getAllTransactions;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)
