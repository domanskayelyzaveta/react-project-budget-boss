import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

import {
  addTransaction,
  deleteTransaction,
  fetchExpenseCategories,
  fetchIncomeCategories,
  fetchLogin,
  fetchLogout,
  fetchPeriodData,
  fetchRegister,
  fetchUser,
  getTransactions,
  setBalance,
  setToken,
} from 'service/Api';
// import { selectToken } from './selectors';

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

//---------------logout------------------//
// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };
export const logoutThunk = createAsyncThunk(
  'user/logoutThunk',
  async (token, thunkAPI) => {
    try {
      await fetchLogout(token);
      // clearAuthHeader();
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

//-----------------user-----------------//

export const userThunk = createAsyncThunk(
  'user/fetchThunk',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().user.accessToken;
    setToken(token);
    try {
      const response = await fetchUser();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userSetBalanceThunk = createAsyncThunk(
  'user/userSetBalance',
  async (balance = 0, thunkAPI) => {
    const token = thunkAPI.getState().user.accessToken;
    setToken(token);
    try {
      const response = await setBalance(balance);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//---------------RequestIncomeCategories------------------//
export const requestIncomeCategoriesThunk = createAsyncThunk(
  'transaction/requestIncomeCategories',
  async (_, thunkAPI) => {
    try {
      const response = await fetchIncomeCategories();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//---------------RequestExpenseCategories------------------//
export const requestExpenseCategoriesThunk = createAsyncThunk(
  'transaction/requestExpenseCategories',
  async (_, thunkAPI) => {
    try {
      const response = await fetchExpenseCategories();
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

export const addIncomeTransactionThunk = createAsyncThunk(
  'transaction/addIncomeTransaction',
  async (data, thunkAPI) => {
    const token = thunkAPI.getState().user.accessToken;
    try {
      const addNewTransaction = addTransaction(data, token);
      thunkAPI.dispatch(getIncomeTransactionsThunk('income'));
      return addNewTransaction;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addExpenseTransactionThunk = createAsyncThunk(
  'transaction/addExpenseTransaction',
  async (data, thunkAPI) => {
    const token = thunkAPI.getState().user.accessToken;
    try {
      const addNewTransaction = await addTransaction(data, token);
      thunkAPI.dispatch(getExpensesTransactionsThunk('expense'));
      return addNewTransaction;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteIncomeTransactionThunk = createAsyncThunk(
  'transaction/deleteIncomeTransaction',
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().user.accessToken;
    try {
      const delTransaction = await deleteTransaction(id, token);
      thunkAPI.dispatch(getIncomeTransactionsThunk('income'));
      return delTransaction;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteExpenseTransactionThunk = createAsyncThunk(
  'transaction/deleteExpenseTransaction',
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().user.accessToken;
    try {
      const delTransaction = await deleteTransaction(id, token);
      thunkAPI.dispatch(getExpensesTransactionsThunk('expense'));
      return delTransaction;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getIncomeTransactionsThunk = createAsyncThunk(
  'transaction/getIncomeTransactions',
  async (category, thunkAPI) => {
    const token = thunkAPI.getState().user.accessToken;
    try {
      const getAllTransactions = await getTransactions(category, token);
      return getAllTransactions;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getExpensesTransactionsThunk = createAsyncThunk(
  'transaction/getExpensesTransactions',
  async (category, thunkAPI) => {
    const token = thunkAPI.getState().user.accessToken;
    try {
      const getAllTransactions = await getTransactions(category, token);
      return getAllTransactions;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
