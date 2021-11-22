import { registerLocale } from 'react-datepicker';
import uk from 'date-fns/locale/uk';

const calendarLocale = 'uk';
registerLocale(calendarLocale, uk);

export const ukrainian = {
  calendarLocale,
  title: 'ukrainian',
  originalTitle: 'UA',
  momentTitle: 'uk',
  //originalTitle: 'українська',
  header: {
    //     burgerMenu: {
    //       toggleTheme: 'Темна тема',
    //       changeLanguage: 'Мова',
    //     },
    userMenu: { btnText: 'Вийти' },
  },
  auth: {
    authForm: {
      signUpTitle: 'Реєстрація',
      signInTitle: 'Вхід',
      email: 'E-mail',
      password: 'Пароль',
      confirmPassword: 'Підтвердіть пароль',
      btnSignUp: 'Зареєструватись',
      signUpQuestion: 'Маєте акаунт?',
      signUpLink: 'Увійти',
      btnSignIn: 'Увійти',
      signInQuestion: 'Немає акаунту?',
      signInLink: 'Зареєструватись',
      validEmail: 'Невірна поштова скринька',
      validEmailReq: "Поштова скринька обов'язкова",
      validMin: 'Пароль має бути як мінімум 7 символів',
      validMax: 'Пароль не має перевищувати 20 символів',
      validPasReq: "Пароль обов'язковий",
      validPas: 'Паролі не співпадають',
      validCPasReq: "Пароль підтвердження обов'язковий",
    },
  },
  projects: {
    pageTitle: 'Проекти',
    pageAddBtn: 'Створити проект',
    message:
      'Ваша колекція проектів порожня, скористайтесь кнопкою "Створити проект"',
    addProjectsForm: {
      formTitle: 'Створення проекту',
      title: 'Назва проекту',
      description: 'Опис',
      validMin: 'Занадто коротка назва, мін 2 символа!',
      validMax12: 'Занадто довга назва, макс 20 символів!',
      validMax70: 'Занадто довга назва, макс 70 символів!',
      validReq: "Поле обов'язкове!",
    },
  },
  sprints: {
    pageAddBtn: 'Створити спринт',
    addMembers: 'Додати людей',
    message:
      'Ваша колекція спринтів порожня, скористайтесь кнопкою "Створити спринт"',
    sideBar: {
      goBack: 'Показати проекти',
      btnDesc: 'Створити проект',
    },
    addSprintsForm: {
      formTitle: 'Створення спринта',
      title: 'Назва спринта',
      startDate: 'Дата початку',
      endDate: 'Дата закінчення',
      duration: 'Тривалість',
      prevDays: 'Попередні дні',
      validReq: "Поле обов'язкове!",
      validMin: 'Мінімум 2 дні!',
    },
    addMem: {
      email: 'Введіть Email',
      addedMem: 'Додані користувачі :',
      message: 'Ви ще не додали жодного користувача',
      validEmail: 'Невірна поштова скринька',
    },
  },
  tasks: {
    pageAddBtn: 'Створити задачу',
    th111: 'Задача',
    th222: 'Заплановано годин',
    th333: 'Витрачено год / день',
    th444: 'Витрачено годин',
    th1: 'Задача',
    th21: 'Заплановано',
    th22: 'годин',
    th31: 'Витрачено',
    th32: 'год / день',
    th41: 'Витрачено',
    th42: 'годин',

    message:
      'Ваша колекція задач порожня, скористайтесь кнопкою "Створити задачу"',
    sideBar: {
      goBack: 'Показати спринти',
      btnDesc: 'Створити спринт',
    },
    addTasksForm: {
      formTitle: 'Створення задачі',
      title: 'Назва задачі',
      duration: 'Заплановано годин',
      validMin: 'Занадто коротка назва, мін 4 символа!',
      validMax20: 'Занадто довга назва, макс 20 символів!',
      valMin: 'Мін 1 година!',
      valMax: 'Макс 8 годин!',
      validReq: "Поле обов'язкове!",
    },
    chart: {
      labelone: 'Запланований залишок трудовитрат',
      labeltwo: 'Актуальний залишок трудовитрат',
    },
    find: {
      label: 'Пошук',
      validMin: 'Занадто коротка назва, мін 1 символ!',
      validMax20: 'Занадто довга назва, макс 20 символів!',
    },
  },
  btn: 'Готово',
  btnCancel: 'Відміна',
  nfp: {
    title: '404 Ой! Сторінка не знайдена',
    link: 'Можливо ви загубились? Hатисніть щоб повернутись до сайту.',
  },
  errors: {
    error409: 'Надана електронна адреса вже існує',
    error403: 'Електронна адреса або пароль невірні',
  },
  teamTitle: 'Наша команда',
};
