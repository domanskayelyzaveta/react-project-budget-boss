import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './usersReducer';
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

const userPersistConfig = {
  key: 'user', //локал стор токен auth
  storage,
  whitelist: ['accessToken'],
};

const store = configureStore({
  reducer: {
    user: persistReducer(userPersistConfig, usersReducer),
    // expenses: expensesReducer,
    // income: incomeReducer,
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

//userData
