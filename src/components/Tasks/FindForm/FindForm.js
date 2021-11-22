import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from '../../../redux/tasks/tasks-actions';
import Input from '../../Input/Input';
import s from './FindForm.module.scss';
import Svg from '../../Svg/Svg';
import { getCurrentLanguage } from '../../../redux/userSettings/userSettingsSelectors';
import { useRef } from 'react';

const FindForm = ({ toggleFindInput }) => {
  const curLanguage = useSelector(getCurrentLanguage);
  const dispatch = useDispatch();
  const formRef = useRef(null);

  const validationSchema = Yup.object().shape({
    query: Yup.string()
      .min(1, curLanguage.tasks.find.validMin)
      .max(20, curLanguage.tasks.find.validMax20),
  });

  const formik = useFormik({
    initialValues: { query: '' },
    validationSchema,
    onSubmit: data => {
      dispatch(filterChange(data.query));
    },
  });

  return (
    <div className={s.findBox}>
      <form ref={formRef} onSubmit={formik.handleSubmit}>
        <Input
          formik={formik}
          type="text"
          name="query"
          label={curLanguage.tasks.find.label}
          value={formik.values.query}
          onBlur={toggleFindInput}
          onChange={e => {
            formik.handleChange(e);
            formRef.current.dispatchEvent(
              new Event('submit', { bubbles: true, cancelable: true }),
            );
          }}
        />

        <button type="submit" className={s.iconBtn}>
          <Svg icon="#icon-find" className={s.icon} />
        </button>
      </form>
    </div>
  );
};

export default FindForm;
