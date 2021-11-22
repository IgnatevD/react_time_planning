import { useFormik } from 'formik';
import * as Yup from 'yup';
import { patchProject } from '../../../redux/projects/projectOperations';
import s from './FormEditTitel.module.scss';
import Input from '../../Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentLanguage } from '../../../redux/userSettings/userSettingsSelectors';
import IconBtn from '../../IconBtn/IconBtn';

export default function FormEditTitel({ nowProject, toggleInput, projectId }) {
  const curLanguage = useSelector(getCurrentLanguage);
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, curLanguage.projects.addProjectsForm.validMin)
      .max(20, curLanguage.projects.addProjectsForm.validMax12)
      .required(curLanguage.projects.addProjectsForm.validReq),
  });
  const formik = useFormik({
    initialValues: { title: nowProject.title },
    validationSchema,
    onSubmit: ({ title }) => {
      dispatch(
        patchProject({
          projectId,
          titleData: { title },
        }),
      );
      toggleInput();
    },
  });
  return (
    <form className={s.editorForm} onSubmit={formik.handleSubmit}>
      <Input autoFocus formik={formik} name="title" className={s.editorInput} />
      <IconBtn
        icon={'pencil'}
        secondary
        type="submit"
        className={s.editorBtnForm}
      />
    </form>
  );
}
