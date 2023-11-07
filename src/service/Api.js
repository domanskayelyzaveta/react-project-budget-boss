import axios from 'axios';

const BASE_URL = 'https://kapusta-backend.p.goit.global/';
const $instance = axios.create({
  baseURL: BASE_URL,
});

export const setToken = token => {
  $instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const fetchUser = async () => {
  const { data } = await $instance.get('/user');
  return data;
};

export const setBalance = async balance => {
  const { data } = await $instance.patch('/user/balance', balance);
  return data;
};

export const fetchRegister = async userData => {
  const { data } = await $instance.post('/auth/register', userData);
  return data;
};

export const fetchLogin = async userData => {
  const { data } = await $instance.post('auth/login', userData);
  setToken(data.accessToken);
  return data;
};

//=============refresh token==================================

export const fetchRefreshToken = async sid => {
  const { data } = await $instance.post('/auth/refresh', { sid });
  return data;
};

//============================================================

export const fetchLogout = async () => {
  const { data } = await $instance.post('/auth/logout');
  return data;
};

export const fetchIncomeCategories = async () => {
  const { data } = await $instance.get('/transaction/income-categories');
  return data;
};

export const fetchExpenseCategories = async () => {
  const { data } = await $instance.get('/transaction/expense-categories');
  return data;
};

/*
│ =========================
│     Dashboard queries
│ =========================
*/

export async function addTransaction(data) {
  const response = await $instance.post(
    `/transaction/${data.category}`,
    data.dataToDispatch
  );

  return response.data;
}

export async function deleteTransaction(id) {
  const { data } = await $instance.delete(`/transaction/${id}`);

  return { id, data };
}

export const getTransactions = async category => {
  const { data } = await $instance.get(`/transaction/${category}`);

  return data;
};

export const fetchPeriodData = async date => {
  const { data } = await $instance.get(`/transaction/period-data?date=${date}`);
  return data;
};
