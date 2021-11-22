import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SelectLang.module.scss';

import * as actions from '../../../redux/userSettings/userSettingsActions';
import { languages } from '../../../languages';
import { getLanguage } from '../../../redux/userSettings/userSettingsSelectors';

export default function SelectLang() {
  const language = useSelector(getLanguage);
  const dispatch = useDispatch();

  return (
    <select
      name="languageSelector"
      onChange={e => {
        dispatch(actions.changeLanguage(e.target.value));
      }}
      defaultValue={language}
      className={styles.select__css}
    >
      {languages.list.map(lang => (
        <option value={lang} key={lang}>
          {languages[lang].originalTitle}
        </option>
      ))}
    </select>
  );
}
