import React, { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { Switch } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';
import PrivateRoute from '../Routes/PrivateRoute';
import PublicRoute from '../Routes/PublicRoute';

import { routes } from '../../routes/routes';

import styles from './Main.module.scss';
import { getAuthError } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const LoginPage = lazy(() =>
  import(
    '../../pages/LoginPage/LoginPage' /* webpackChunkName: "login-page" */
  ),
);
const RegisterPage = lazy(() =>
  import(
    '../../pages/RegisterPage/RegisterPage' /* webpackChunkName: "register-page" */
  ),
);
const ProjectsPage = lazy(() =>
  import(
    '../../pages/ProjectsPage/ProjectsPage' /* webpackChunkName: "projects-page" */
  ),
);
const SprintsPage = lazy(() =>
  import(
    '../../pages/SprintsPage/SprintsPage' /* webpackChunkName: "sprints-page" */
  ),
);
const TasksPage = lazy(() =>
  import(
    '../../pages/TasksPage/TasksPage' /* webpackChunkName: "tasks-page" */
  ),
);
const NotFoundPage = lazy(() =>
  import(
    '../../pages/NotFoundPage/NotFoundPage' /* webpackChunkName: "not-found-page" */
  ),
);
const OurTeamPage = lazy(() =>
  import(
    '../../pages/OurTeamPage/OurTeamPage' /* webpackChunkName: "team-page" */
  ),
);

export default function Main() {
  const authError = useSelector(getAuthError);

  useEffect(() => {
    authError && toast.error(authError);
  }, [authError]);

  return (
    <main className={styles.main}>
      <Suspense fallback={<LoaderSpinner />}>
        <Switch>
          <PublicRoute
            path={routes.login}
            restricted
            redirectedTo={routes.projects}
          >
            <LoginPage />
          </PublicRoute>

          <PublicRoute
            path={routes.register}
            restricted
            redirectedTo={routes.projects}
          >
            <RegisterPage />
          </PublicRoute>

          <PrivateRoute
            path={routes.projects}
            redirectedTo={routes.register}
            exact
          >
            <ProjectsPage />
          </PrivateRoute>

          <PrivateRoute
            path={routes.sprints}
            redirectedTo={routes.register}
            exact
          >
            <SprintsPage />
          </PrivateRoute>

          <PrivateRoute path={routes.tasks} redirectedTo={routes.register}>
            <TasksPage />
          </PrivateRoute>

          <PublicRoute path={routes.ourTeam}>
            <OurTeamPage />
          </PublicRoute>

          <PublicRoute>
            <NotFoundPage />
          </PublicRoute>
        </Switch>
      </Suspense>
      <ToastContainer autoClose={3000} />
    </main>
  );
}
