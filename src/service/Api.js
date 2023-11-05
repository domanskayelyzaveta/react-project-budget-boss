import axios from 'axios';

const BASE_URL = 'https://kapusta-backend.p.goit.global/';
const $instance = axios.create({
  baseURL: BASE_URL,
});

export const setToken = token => {
  $instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

// const clearToken = () => {
//   $instance.defaults.headers.Authorization = '';
// };

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

export const fetchLogout = async token => {
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

// export const fetchExpenseCategories = async token => {
//   const { data } = await $instance.get('/transaction/expense-categories', {
//     headers: { Authorization: Bearer ${token} },
//   });
//   
//   return data;
// };

// export const fetchCurrentUser = async () => {
//   const { data } = await $instance.get('/users/current');
//   
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
  // const { data } = await $instance.get(`/transaction/${category}`, {
  //   headers: { Authorization: `Bearer ${token}` },
  // });

  return data;
};

// export const GoogleAuth = async () => {
//   const { data } = await $instance.get('/auth/google');
//   return data;
// };

// export const GoogleAuth = async () => {
//   const { data } = await $instance.get('/auth/google');
//   return data;
// };

export const fetchPeriodData = async date => {
  const { data } = await $instance.get(`/transaction/period-data?date=${date}`);
  return data;
};
