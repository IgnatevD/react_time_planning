import { useFormik } from 'formik';
import * as Yup from 'yup';
import s from './FormAddPeople.module.scss';
import Input from '../../Input/Input';
import Button from '../../Button/Button';

import { useDispatch, useSelector } from 'react-redux';
import { getProjectsList } from '../../../redux/projects/projectSelectors';
import { addProjectMembers } from '../../../redux/projects/projectOperations';
import { useParams } from 'react-router';
import CancelBtn from '../../CancelBtn/CancelBtn';
import { getCurrentLanguage } from '../../../redux/userSettings/userSettingsSelectors';

export default function FormAddPeople({ toggleModal }) {
  const dispatch = useDispatch();
  const { projectId } = useParams();
  const projects = useSelector(getProjectsList);
  const curLanguage = useSelector(getCurrentLanguage);

  const people = projects.find(project => project._id === projectId);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(curLanguage.sprints.addMem.validEmail)
      .required(curLanguage.sprints.addSprintsForm.validReq),
  });

  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema,
    onSubmit: values => {
      dispatch(
        addProjectMembers({
          projectId,
          contributorData: values,
        }),
      );
      toggleModal();
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className={s.formAddPeople}>
        <p className={s.titel}>{curLanguage.sprints.addMembers}</p>
        <Input
          formik={formik}
          name="email"
          label={curLanguage.sprints.addMem.email}
          className={s.inputEmail}
        />
        <p className={s.text}>{curLanguage.sprints.addMem.addedMem}</p>
        {!people.members.length ? (
          <p className={s.textDontEmail}>
            {curLanguage.sprints.addMem.message}
          </p>
        ) : (
          <ul className={s.listEmail}>
            {people.members.map(item => (
              <li key={item} className={s.listEmailItem}>
                {item}
              </li>
            ))}
          </ul>
        )}

        <Button className={s.btnAddPeople} />
      </form>
      <CancelBtn onClick={toggleModal} />
    </>
  );
}
