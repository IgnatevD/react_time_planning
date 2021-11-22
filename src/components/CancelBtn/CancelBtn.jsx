import React from 'react';
import { useSelector } from 'react-redux';
import { getCurrentLanguage } from '../../redux/userSettings/userSettingsSelectors';

import styles from './CancelBtn.module.scss';

export default function CancelBtn({ onClick, title = false, className = '' }) {
  const curLanguage = useSelector(getCurrentLanguage);
  function handleClick() {
    onClick();
  }
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${styles.btn} className`}
    >
      {title ? title : curLanguage.btnCancel}
    </button>
  );
}
