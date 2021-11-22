import React from 'react';
import shortid from 'shortid';

import styles from './Input.module.scss';

// этот инпут работает только с формиком!
// по умолчанию инпут на всю ширину родителя
// проп className для отступов или изменения размера инпута,
// но что бы изменить ширину нужно использовать сложный селектор
// ниже есть пример как использовать этот компонент
// проп label для описания инпута которое будет над инпутом
export default function Input({
  formik,
  name,
  label,
  className = '',
  type = 'text',
  ...rest
}) {
  const inputId = shortid.generate();
  const isError = formik.errors[name] && formik.touched[name];
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <input
        type={type}
        className={`${styles.input} ${isError && styles.inputError}`}
        placeholder=" "
        name={name}
        id={inputId}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        {...rest}
      />
      <div
        className={`${styles.bottomLine} ${isError && styles.bottomLineError}`}
      ></div>
      {isError && <span className={styles.error}>{formik.errors[name]}</span>}
      <label
        htmlFor={inputId}
        className={`${styles.label} ${isError && styles.labelError}`}
      >
        {label}
      </label>
    </div>
  );
}

// пример как использовать этот инпут и как подключить формик

// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// import Input from '...smth.../Input/Input';
// import Button from '...smth.../Button/Button';

// const validationSchema = Yup.object().shape({
//   nameYourInput: Yup.string()
//     .min(2, 'Занадто коротка назва, мін 2 символа!')
//     .max(16, 'Занадто довга назва, макс 16 символів!')
//     .required("Поле обов'язкове!"),
// });

// export default function YourComponentFormExample() {

// const formik = useFormik({
//   initialValues: { nameYourInput: '' },
//   validationSchema,
//   onSubmit: values => {
//     console.log(values);
//   },
// });

//   return (
//     <>
//       <form onSubmit={formik.handleSubmit}>
//         <Input formik={formik} name="nameYourInput" label="Ваше ім'я" />
//         <Button />
//       </form>
//     </>
//   );
// }

// больше инфы в дискорде в канале важное
