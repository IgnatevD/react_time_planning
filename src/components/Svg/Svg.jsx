import React from 'react';

import sprite from '../../icons/sprite.svg';

import styles from './Svg.module.scss';

export default function Svg({ icon, className = '' }) {
  return (
    <svg className={`${styles.icon} ${className}`}>
      <use href={sprite + icon} />
    </svg>
  );
}
