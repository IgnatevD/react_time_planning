import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Svg from '../../Svg/Svg';

import { logout } from '../../../redux/auth/auth-operations';
import { getUser } from '../../../redux/auth/auth-selectors';

import styles from './UserMenu.module.scss';
import { getCurrentLanguage } from '../../../redux/userSettings/userSettingsSelectors';

export default function UserMenu({ onCloseBurger = false }) {
  const email = useSelector(getUser);
  const curLanguage = useSelector(getCurrentLanguage);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    onCloseBurger && onCloseBurger();
    dispatch(logout());
  };

  return (
    <div className={styles.userContainer}>
      <p className={styles.text}>{email.slice(0, email.indexOf('@'))}</p>
      <button className={styles.btn} type="button" onClick={handleLogOut}>
        <Svg icon="#icon-exit" className={styles.icon} />
        <span className={styles.btnText}>
          {curLanguage.header.userMenu.btnText}
        </span>
      </button>
    </div>
  );
}
