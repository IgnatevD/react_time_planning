import { useFormik } from 'formik';
import * as Yup from 'yup';
import s from './FormAddSprint.module.scss';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import './calendar.css';
import { useDispatch, useSelector } from 'react-redux';
import sprintOperations from '../../../redux/sprint/sprin-operations';
import { getLanguage } from '../../../redux/userSettings/userSettingsSelectors.js';
import { languages } from '../../../languages';
import { useParams } from 'react-router';
import CancelBtn from '../../CancelBtn/CancelBtn';
import { getCurrentLanguage } from '../../../redux/userSettings/userSettingsSelectors';
import { useState } from 'react';
import Svg from '../../Svg/Svg';

export default function FormAddSprint({ toggleModal }) {
  const { calendarLocale } = languages[useSelector(getLanguage)];
  const dispatch = useDispatch();
  const { projectId } = useParams();
  const curLanguage = useSelector(getCurrentLanguage);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(curLanguage.sprints.addSprintsForm.validReq),
    date: Yup.date()
      .nullable()
      .required(curLanguage.sprints.addSprintsForm.validReq),
    duration: Yup.number()
      .required(curLanguage.sprints.addSprintsForm.validReq)
      .min(2, curLanguage.sprints.addSprintsForm.validMin),
  });

  const [check, setCheck] = useState(false);
  const [openCalend, setOpenCalend] = useState(true);

  const formik = useFormik({
    initialValues: { title: '', duration: '', date: new Date() },
    validationSchema,
    onSubmit: ({ title, duration, date }) => {
      const endDate = moment(date).format('YYYY-M-D');
      dispatch(
        sprintOperations.postSprint({
          projectId,
          body: {
            title,
            endDate,
            duration,
          },
        }),
      );
      toggleModal();
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className={s.formAddSprint}>
        <p className={s.titel}>
          {curLanguage.sprints.addSprintsForm.formTitle}
        </p>
        <Input
          formik={formik}
          name="title"
          label={curLanguage.sprints.addSprintsForm.title}
          className={s.inputNameSprint}
        />
        <input
          className={s.checkbox}
          name="check"
          type="checkbox"
          id="green"
          value="green"
          onChange={() => setCheck(!check)}
        />
        <label className={s.checkboxLabel} htmlFor="green">
          {curLanguage.sprints.addSprintsForm.prevDays}
        </label>
        <div className={s.containerDate}>
          <div className={s.datePickerConteiner}>
            <label className={s.datePickerLabel} htmlFor="datePicker">
              <span className={s.datePickerLabel}>
                {curLanguage.sprints.addSprintsForm.endDate}
              </span>
              <Svg
                icon={`#icon-${openCalend ? 'polygonDown' : 'polygon'}`}
                className={s.iconPolygonDown}
              />
            </label>
            <DatePicker
              onBlur={() => {
                setOpenCalend(!openCalend);
                formik.setFieldTouched('date', true);
              }}
              onFocus={() => setOpenCalend(!openCalend)}
              locale={calendarLocale}
              id="datePicker"
              name="date"
              dateFormatCalendar="LLLL"
              autocomplete="off"
              minDate={check ? null : new Date()}
              dateFormat="dd MMM"
              className={s.date}
              selected={formik.values.date}
              onChange={date => {
                setOpenCalend(!openCalend);
                formik.setFieldValue('date', date);
              }}
            />
            {formik.errors.date && formik.touched.date && (
              <span className={s.errorsDate}>{formik.errors.date}</span>
            )}
          </div>

          <Input
            formik={formik}
            type="number"
            name="duration"
            label={curLanguage.sprints.addSprintsForm.duration}
            className={s.inputDays}
          />
        </div>

        <Button className={s.btnAddSprint} />
      </form>
      <CancelBtn onClick={toggleModal} />
    </>
  );
}
