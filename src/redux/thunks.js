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
  fetchRefreshToken,
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

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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
      // TODO: відловити помилку з сервера
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

//=============================REFRESH===========================================================================

export const refreshAccessTokenThunk = createAsyncThunk(
  'user/refreshAccessToken',
  async (_, thunkAPI) => {
    const { refreshToken, sid } = thunkAPI.getState().user;
    setToken(refreshToken);
    try {
      const response = await fetchRefreshToken(sid);
      setToken(response.newAccessToken);
      const user = await fetchUser();
      return { user, ...response };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//===============================================================================================================

//-----------------user-----------------//

export const userThunk = createAsyncThunk(
  'user/fetchThunk',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().user.accessToken;
    setToken(token);

    try {
      if (!token) {
        throw new Error();
      }
      const response = await fetchUser();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userSetBalanceThunk = createAsyncThunk(
  'user/userSetBalance',
  async (balance, thunkAPI) => {
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
    try {
      const addNewTransaction = await addTransaction(data);
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
    try {
      const addNewTransaction = await addTransaction(data);
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
    try {
      const delTransaction = await deleteTransaction(id);
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
    try {
      const delTransaction = await deleteTransaction(id);
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
    try {
      const getAllTransactions = await getTransactions(category);
      return getAllTransactions;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getExpensesTransactionsThunk = createAsyncThunk(
  'transaction/getExpensesTransactions',
  async (category, thunkAPI) => {
    try {
      const getAllTransactions = await getTransactions(category);
      return getAllTransactions;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
