import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/routes';

import Input from '../Input/Input';
import Button from '../Button/Button';
import Container from '../Container/Container';

import { signIn, signUp } from '../../redux/auth/auth-operations';

import styles from './AuthForm.module.scss';
import { useSelector } from 'react-redux';
import { getCurrentLanguage } from '../../redux/userSettings/userSettingsSelectors';

const AuthForm = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const curLanguage = useSelector(getCurrentLanguage);

  const validationSchemaReg = yup.object({
    email: yup
      .string()
      .email(curLanguage.auth.authForm.validEmail)
      .required(curLanguage.auth.authForm.validEmailReq),
    password: yup
      .string()
      .min(7, curLanguage.auth.authForm.validMin)
      .max(20, curLanguage.auth.authForm.validMax)
      .required(curLanguage.auth.authForm.validPasReq),
    confirmPassword: yup
      .string()
      .when('password', {
        is: val => (val && val.length > 0 ? true : false),
        then: yup
          .string()
          .oneOf([yup.ref('password')], curLanguage.auth.authForm.validPas),
      })
      .required(curLanguage.auth.authForm.validCPasReq),
  });

  const validationSchemaLog = yup.object({
    email: yup
      .string()
      .email(curLanguage.auth.authForm.validEmail)
      .required(curLanguage.auth.authForm.validEmailReq),
    password: yup
      .string()
      .min(7, curLanguage.auth.authForm.validMin)
      .max(20, curLanguage.auth.authForm.validMax)
      .required(curLanguage.auth.authForm.validPasReq),
  });

  const formik = useFormik({
    initialValues: isRegisterForm()
      ? {
          email: '',
          password: '',
          confirmPassword: '',
        }
      : { email: '', password: '' },
    validationSchema: isRegisterForm()
      ? validationSchemaReg
      : validationSchemaLog,
    onSubmit: ({ email, password }) => {
      const data = { email, password };
      isRegisterForm() ? dispatch(signUp(data)) : dispatch(signIn(data));
    },
  });

  function isRegisterForm() {
    return pathname === '/register';
  }

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.authContainer}>
            <h2 className={styles.title}>
              {isRegisterForm()
                ? curLanguage.auth.authForm.signUpTitle
                : curLanguage.auth.authForm.signInTitle}
            </h2>
            <form onSubmit={formik.handleSubmit}>
              <Input
                formik={formik}
                name="email"
                label={curLanguage.auth.authForm.email}
                className={styles.input}
              />
              <Input
                formik={formik}
                name="password"
                label={curLanguage.auth.authForm.password}
                type="password"
                className={styles.input}
              />
              {isRegisterForm() && (
                <Input
                  formik={formik}
                  name="confirmPassword"
                  label={curLanguage.auth.authForm.confirmPassword}
                  type="password"
                  className={styles.input}
                />
              )}
              <Button
                title={
                  isRegisterForm()
                    ? curLanguage.auth.authForm.btnSignUp
                    : curLanguage.auth.authForm.btnSignIn
                }
                className={styles.btn}
              />
            </form>
            <div className={styles.linkWrapper}>
              {isRegisterForm() ? (
                <>
                  <span className={styles.text}>
                    {curLanguage.auth.authForm.signUpQuestion}
                  </span>
                  <Link to={routes.login} className={styles.link}>
                    {curLanguage.auth.authForm.signUpLink}
                  </Link>
                </>
              ) : (
                <>
                  <span className={styles.text}>
                    {curLanguage.auth.authForm.signInQuestion}
                  </span>
                  <Link to={routes.register} className={styles.link}>
                    {curLanguage.auth.authForm.signInLink}
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AuthForm;
