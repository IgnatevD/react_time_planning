import React from 'react';
import { useSelector } from 'react-redux';
import { getCurrentLanguage } from '../../redux/userSettings/userSettingsSelectors';

import styles from './Button.module.scss';

export default function Button({ title = false, className = '' }) {
  const curLanguage = useSelector(getCurrentLanguage);
  return (
    <button className={`${styles.btn} ${className}`} type="submit">
      {title ? title : curLanguage.btn}
    </button>
  );
}
