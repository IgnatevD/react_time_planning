import React from 'react';
import { Link } from 'react-router-dom';

import Svg from '../../Svg/Svg';

import { routes } from '../../../routes/routes';

import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <Link to={routes.register}>
      <Svg icon="#icon-logo" className={styles.logo} />
    </Link>
  );
}
