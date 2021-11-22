import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/routes';

import Container from '../Container/Container';
import Svg from '../Svg/Svg';

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <span className={styles.text}>
          &copy; 2021 All Rights Reserved Developed with
          <Svg icon="#icon-heart" className={styles.icon} /> by
          <Link to={routes.ourTeam} className={styles.link}>
            GoIT Students
          </Link>
        </span>
      </Container>
    </footer>
  );
}
