import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Container from '../Container/Container';
import Logo from './Logo/Logo';
import UserMenu from './UserMenu/UserMenu';
import SelectLang from './SelectLang/SelectLang';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import ChangerTheme from './ChangerTheme/ChangerTheme.jsx';

import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

import styles from './Header.module.scss';

export default function Header() {
  const [windowWidth, setWindowWidth] = useState({
    width: window.innerWidth,
    breakPoint: 768,
  });
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  function handleResizeWindow() {
    setWindowWidth({ ...windowWidth, width: window.innerWidth });
  }

  const { width, breakPoint } = windowWidth;

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Logo />
        <div className={styles.headerUtil}>
          {width < breakPoint ? (
            <BurgerMenu>
              {isLoggedIn && <UserMenu />}
              <ChangerTheme />
              <SelectLang />
            </BurgerMenu>
          ) : (
            <>
              <ChangerTheme />
              <SelectLang />
              {isLoggedIn && <UserMenu />}
            </>
          )}
        </div>
      </Container>
    </header>
  );
}
