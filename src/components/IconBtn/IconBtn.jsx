import React from 'react';

import Svg from '../Svg/Svg';

import styles from './IconBtn.module.scss';

// если icon = "add" - плюс, если "chart"-график,
// если "pencil" - крандаш, если "bin" - корзина
export default function IconBtn({
  icon,
  onClick,
  className,
  type = 'button',
  secondary = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={`${icon}-button`}
      className={[
        styles[secondary ? 'btnSecondary' : 'btnPrimary'],
        className,
      ].join(' ')}
    >
      <Svg
        icon={`#icon-${icon}`}
        className={styles[secondary ? 'secondary' : 'main']}
      />
    </button>
  );
}
