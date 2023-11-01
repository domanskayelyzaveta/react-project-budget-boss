import axios from 'axios';
import { calcLength } from 'framer-motion';

const BASE_URL = 'https://kapusta-backend.p.goit.global/';
const $instance = axios.create({
  baseURL: BASE_URL,
});

export const setToken = token => {
  $instance.defaults.headers.Authorization = `Bearer ${token}`;
};

// const clearToken = () => {
//   $instance.defaults.headers.Authorization = '';
// };

export const fetchRegister = async userData => {
  const { data } = await $instance.post('/auth/register', userData);
  setToken(data.token);
  return data;
};

export const fetchLogin = async userData => {
  const { data } = await $instance.post('auth/login', userData);
  setToken(data.token);
  return data;
};

export const fetchIncomeCategories = async token => {
  const { data } = await $instance.get('/transaction/income-categories', {
    headers: { Authorization: `Bearer ${token}` },
  });
  // setToken(data.token);
  return data;
};

export const fetchExpenseCategories = async token => {
  const { data } = await $instance.get('/transaction/expense-categories', {
    headers: { Authorization: `Bearer ${token}` },
  });
  // setToken(data.token);
  return data;
};

// export const fetchExpenseCategories = async token => {
//   const { data } = await $instance.get('/transaction/expense-categories', {
//     headers: { Authorization: Bearer ${token} },
//   });
//   console.log(data);
//   return data;
// };

// export const fetchLogout = async () => {
//   const { data } = $instance.post('/users/logout');
//   clearToken();
//   return data;
// };

// export const fetchCurrentUser = async () => {
//   const { data } = await $instance.get('/users/current');
//   console.log(data);
//   return data;
// };

// export const fetchPhoneBook = async () => {
//   const { data } = await $instance.get('/contacts');
//   return data;
// };
// export const addContact = async newContact => {
//   const { data } = await $instance.post('/contacts', newContact);
//   return data;
// };

// export const deleteContact = async contactId => {
//   const { data } = await $instance.delete(`/contacts/${contactId}`);
//   return data;
// };
