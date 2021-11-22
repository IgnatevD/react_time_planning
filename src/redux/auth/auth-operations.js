import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  apiLoginUser,
  apiLogoutUser,
  apiRefreshUser,
  apiRegisterUser,
} from '../../utils/apiServices';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (user, { rejectWithValue, getState }) => {
    const currentLang = getState().userSettings.language;
    try {
      await apiRegisterUser(user, currentLang);
      const data = await apiLoginUser(user, currentLang);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (user, { rejectWithValue, getState }) => {
    const currentLang = getState().userSettings.language;
    try {
      return await apiLoginUser(user, currentLang);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await apiLogoutUser();
      return;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const resetUser = createAsyncThunk('auth/reset', async (_, thunk) => {
  const state = thunk.getState();
  const stateToken = state.auth.refreshToken;

  if (!stateToken) {
    return thunk.rejectWithValue(null);
  }

  const stateSid = state.auth.sid;

  try {
    const data = await apiRefreshUser(stateToken, stateSid);
    return data;
  } catch (error) {
    return thunk.rejectWithValue(error.message);
  }
});
