import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

import { resetUser } from '../redux/auth/auth-operations';
import { getIsResetingUser } from '../redux/auth/auth-selectors';
import { getTheme } from '../redux/userSettings/userSettingsSelectors.js';
import { changeTheme } from '../redux/userSettings/userSettingsActions.js';

export const light = 'light';
export const dark = 'dark';

function App() {
  const history = useHistory();
  const isResetingUser = useSelector(getIsResetingUser);
  const theme = useSelector(getTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    switch (theme) {
      case light:
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        break;
      case dark:
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        break;
      default:
        dispatch(changeTheme(light));
    }
  }, [theme, dispatch]);

  useEffect(() => {
    const emptyPath = history.location.pathname === '/';
    emptyPath && history.replace('/register');
    dispatch(resetUser());
  }, [history, dispatch]);

  return (
    !isResetingUser && (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  );
}

export default App;
