import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentLanguage } from '../../../redux/userSettings/userSettingsSelectors';
import Input from '../../Input/Input';
import IconBtn from '../../IconBtn/IconBtn';
import sprintOperations from '../../../redux/sprint/sprin-operations';
import s from './SprintTitle.module.scss';

const SprintTitleInput = ({ title, toggleInputTitle, sprintId }) => {
  const dispatch = useDispatch();
  const curLanguage = useSelector(getCurrentLanguage);

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(4, curLanguage.tasks.addTasksForm.validMin)
      .max(20, curLanguage.tasks.addTasksForm.validMax20)
      .required(curLanguage.tasks.addTasksForm.validReq),
  });

  const formik = useFormik({
    initialValues: { title: title },
    validationSchema,
    onSubmit: data => {
      dispatch(
        sprintOperations.patchSprint({ id: sprintId, title: data.title }),
      );
      toggleInputTitle();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={s.editForm}>
      <Input
        formik={formik}
        value={formik.values.title}
        type="text"
        name="title"
        className={s.editInp}
        autoFocus
      />
      <IconBtn type="submit" icon="pencil" secondary />
    </form>
  );
};

export default SprintTitleInput;
