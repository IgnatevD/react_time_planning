import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './userSettingsActions';

const languageReducer = createReducer('ukrainian', {
  [actions.changeLanguage]: (_, { payload }) => payload,
});

const themeReducer = createReducer('theme', {
  [actions.changeTheme]: (_, { payload }) => payload,
});

export const userSettingsReducer = combineReducers({
  language: languageReducer,
  theme: themeReducer,
});
