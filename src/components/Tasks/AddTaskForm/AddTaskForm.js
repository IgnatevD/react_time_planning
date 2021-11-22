import * as Yup from 'yup';
import { useFormik } from 'formik';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import CancelBtn from '../../CancelBtn/CancelBtn';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../../redux/tasks/tasks-operations';
import s from './AddTaskForm.module.scss';
import { getCurrentLanguage } from '../../../redux/userSettings/userSettingsSelectors';

const AddTaskForm = ({ sprintId, toggleModal }) => {
  const curLanguage = useSelector(getCurrentLanguage);
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(4, curLanguage.tasks.addTasksForm.validMin)
      .max(20, curLanguage.tasks.addTasksForm.validMax20)
      .required(curLanguage.tasks.addTasksForm.validReq),
    hoursPlanned: Yup.number()
      .min(1, curLanguage.tasks.addTasksForm.valMin)
      .max(8, curLanguage.tasks.addTasksForm.valMax)
      .required(curLanguage.tasks.addTasksForm.validReq),
  });

  const formik = useFormik({
    initialValues: { title: '', hoursPlanned: '' },
    validationSchema,
    onSubmit: data => {
      dispatch(
        addTask({
          title: data.title,
          hoursPlanned: data.hoursPlanned,
          sprintId: sprintId,
        }),
      );
      toggleModal();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2 className={s.formTitle}>
        {curLanguage.tasks.addTasksForm.formTitle}
      </h2>
      <Input
        formik={formik}
        type="text"
        name="title"
        label={curLanguage.tasks.addTasksForm.title}
        className={s.titleInput}
      />
      <Input
        formik={formik}
        type="number"
        name="hoursPlanned"
        label={curLanguage.tasks.addTasksForm.duration}
        className={s.descInput}
      />
      <Button type="submit" className={s.btnSubmit} />
      <CancelBtn onClick={toggleModal} />
    </form>
  );
};

export default AddTaskForm;
