import axios from 'axios';

const BASE_URL = 'https://kapusta-backend.p.goit.global/';
const $instance = axios.create({
  baseURL: BASE_URL,
});

export const setToken = accessToken => {
  $instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

// const clearToken = () => {
//   $instance.defaults.headers.Authorization = '';
// };

export const fetchRegister = async userData => {
  const { data } = await $instance.post('auth/register', userData);
  return data;
};

export const fetchLogin = async userData => {
  const { data } = await $instance.post('auth/login', userData);
  setToken(data.accessToken);
  console.log($instance.defaults.headers.Authorization);
  return data;
};

export const fetchIncomeCategories = async () => {
  const { data } = await $instance.get(
    'transaction/income-categories'
    //   , {
    //   headers: {
    //     Authorization:
    //       'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NTQxNmUyOTc0ZWVhNTJkNTZiZDFjZjIiLCJzaWQiOiI2NTQxNmUyOTc0ZWVhNTJkNTZiZDFjZjMiLCJpYXQiOjE2OTg3ODY4NTcsImV4cCI6MTY5ODc5MDQ1N30.8KT6bJZJgnUaaSFnoDtmB_J8bJoxNStSd8CAYY_dlPQ',
    //   },
    // });
  );
  return data;
};

fetchIncomeCategories();
console.log(fetchIncomeCategories());

// export const fetchLogout = async () => {
//   const { data } = $instance.post('/users/logout');
//   clearToken();
//   return data;
// };
