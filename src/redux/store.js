import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';

import sprintSlice from './sprint/sprin-slice';
import allProjectsReducers from './projects/projectReducer';
import tasksReducer from './tasks/tasks-reducer';
import authReducer from './auth/auth-reducer';
import { userSettingsReducer } from './userSettings/userSettingsReducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const persistConfigAuth = {
  key: 'auth',
  storage,
  whitelist: ['user', 'refreshToken', 'sid', 'isLoggedIn'],
};

const persistConfigUserSettings = {
  key: 'userSettings',
  storage,
  whitelist: ['language', 'theme'],
};

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: persistReducer(persistConfigAuth, authReducer),
    userSettings: persistReducer(
      persistConfigUserSettings,
      userSettingsReducer,
    ),
    sprints: sprintSlice,
    projects: allProjectsReducers,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
