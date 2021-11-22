import { createSelector } from '@reduxjs/toolkit';
import { languages } from '../../languages';

export const getLanguage = state => state.userSettings.language;

export const getCurrentLanguage = createSelector([getLanguage], getLanguage => {
  return languages[getLanguage] || languages.ukrainian;
});

export const getTheme = state => state.userSettings.theme;
