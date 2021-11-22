import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Container from '../../components/Container/Container';

import { getCurrentLanguage } from '../../redux/userSettings/userSettingsSelectors';
import { routes } from '../../routes/routes';

import styles from './NotFoundPage.module.scss';

export default function NotFoundPage() {
  const curLanguage = useSelector(getCurrentLanguage);
  return (
    <Container className={styles.container}>
      <div className={styles.wrapper}>
        <h1>{curLanguage.nfp.title}</h1>
        <Link to={routes.register} className={styles.link}>
          {curLanguage.nfp.link}
        </Link>
      </div>
    </Container>
  );
}
