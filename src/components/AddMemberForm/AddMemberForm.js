import { Formik, Form, Field } from 'formik';
import css from './AddMemberForm.module.scss';

export default function AddMemberForm() {
  return (
    <Formik
      initialValues={{
        email: '',
      }}
    >
      <Form autoComplete="off" className={css.form}>
        <label className={css.emailLabel}>
          <Field name="email" placeholder=" " className={css.emailInp} />
          <span className={css.emailLabelText}>Введіть e-mail</span>
        </label>
        <p className={css.membersTitle}>Додані користувачі:</p>
        <ul className={css.membersList}>
          <li className={css.membersItem}>email</li>
        </ul>

        <div className={css.submitWrapper}>
          <button type="submit">Готово</button>
        </div>
      </Form>
    </Formik>
  );
}
