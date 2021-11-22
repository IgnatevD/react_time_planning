import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';
import CancelBtn from '../CancelBtn/CancelBtn.jsx';
import { addProjects } from '../../redux/projects/projectOperations';
import s from './AddProjectsForm.module.scss';
import { getCurrentLanguage } from '../../redux/userSettings/userSettingsSelectors.js';

export default function AddProjectsForm({ closeModal }) {
  const curLanguage = useSelector(getCurrentLanguage);

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, curLanguage.projects.addProjectsForm.validMin)
      .max(20, curLanguage.projects.addProjectsForm.validMax12)
      .required(curLanguage.projects.addProjectsForm.validReq),
    description: Yup.string()
      .min(2, curLanguage.projects.addProjectsForm.validMin)
      .max(70, curLanguage.projects.addProjectsForm.validMax70)
      .required(curLanguage.projects.addProjectsForm.validReq),
  });

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { title: '', description: '' },
    validationSchema,
    onSubmit: data => {
      dispatch(addProjects(data));
      closeModal();
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <h2 className={s.formTitle}>
          {curLanguage.projects.addProjectsForm.formTitle}
        </h2>
        <Input
          formik={formik}
          name="title"
          label={curLanguage.projects.addProjectsForm.title}
          className={s.titleInput}
        />
        <Input
          formik={formik}
          name="description"
          label={curLanguage.projects.addProjectsForm.description}
          className={s.descInput}
        />
        <Button className={s.btnSubmit} />
        <CancelBtn onClick={closeModal} />
      </form>
    </>
  );
}
