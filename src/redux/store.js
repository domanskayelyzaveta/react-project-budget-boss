import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userReducer';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { categoriesReducer } from './categoriesReducer';
import { expensesReducer } from './expensesReducer';
import { incomeReducer } from './incomeReducer';
import { periodInfoReducer } from './periodDataReducer';

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['refreshToken', 'sid'],
};

const store = configureStore({
  reducer: {
    user: persistReducer(userPersistConfig, userReducer),
    income: incomeReducer,
    expenses: expensesReducer,
    categories: categoriesReducer,
    period: periodInfoReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
