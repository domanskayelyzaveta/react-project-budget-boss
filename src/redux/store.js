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

const userPersistConfig = {
  key: 'user', //локал стор токен auth
  storage,
  whitelist: ['accessToken'],
};

const store = configureStore({
  reducer: {
    user: persistReducer(userPersistConfig, userReducer),
    // expenses: expensesReducer,
    // income: incomeReducer,
    // user: userReducer,
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
