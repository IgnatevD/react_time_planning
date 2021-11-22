import { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';

const calendarLocale = 'ru';
registerLocale(calendarLocale, ru);

export const russian = {
  calendarLocale,
  title: 'russian',
  originalTitle: 'RU',
  momentTitle: 'ru',
  //originalTitle: 'русский',
  header: {
    //     burgerMenu: {
    //       toggleTheme: 'Темная тема',
    //       changeLanguage: 'Язык',
    //     },
    userMenu: { btnText: 'Выйти' },
  },
  auth: {
    authForm: {
      signUpTitle: 'Регистрация',
      signInTitle: 'Вход',
      email: 'E-mail',
      password: 'Пароль',
      confirmPassword: 'Подтвердите пароль',
      btnSignUp: 'Зарегистрироваться',
      signUpQuestion: 'Есть акаунт?',
      signUpLink: 'Войти',
      btnSignIn: 'Войти',
      signInQuestion: 'Нет акаунта?',
      signInLink: 'Зарегистрироваться',
      validEmail: 'Неверный почтовый ящик',
      validEmailReq: 'Почтовый ящик обязательный',
      validMin: 'Пароль должен быть как минимум 7 символов',
      validMax: 'Пароль не должен превышать 20 символов',
      validPasReq: 'Пароль обязательный',
      validPas: 'Пароли не совпадают',
      validCPasReq: 'Пароль подтверждения обязательный',
    },
  },
  projects: {
    pageTitle: 'Проекты',
    pageAddBtn: 'Создать проект',
    message:
      'Ваша коллекция проектов пуста, воспользуйтесь кнопкой "Создать проект"',
    addProjectsForm: {
      formTitle: 'Создание проекта',
      title: 'Название проекта',
      description: 'Описание',

      validMin: 'Слишком короткое название, мин 2 символа!',
      validMax12: 'Слишком длинное название, макс 20 символов!',
      validMax70: 'Слишком длинное название, макс 70 символов!',
      validReq: 'Поле обязательное!',
    },
  },
  sprints: {
    pageAddBtn: 'Создать спринт',
    addMembers: 'Добавить людей',
    message:
      'Ваша коллекция спринтов пуста, воспользуйтесь кнопкой "Создать спринт"',
    sideBar: {
      goBack: 'Показать проекты',
      btnDesc: 'Создать проект',
    },
    addSprintsForm: {
      formTitle: 'Создание спринта',
      title: 'Название спринта',
      startDate: 'Дата начала',
      endDate: 'Дата окончания',
      duration: 'Продолжительность',
      prevDays: 'Педыдущие дни',
      validReq: 'Поле обязательное!',
      validMin: 'Минимум 2 дня!',
    },
    addMem: {
      email: 'Введите Email',
      addedMem: 'Добавленыe пользователи :',
      message: 'Вы еще не добавили ни одного пользователя',
      validEmail: 'Неверный почтовый ящик',
    },
  },
  tasks: {
    pageAddBtn: 'Создать задачу',
    th111: 'Задача',
    th222: 'Запланировано часов',
    th333: 'Потрачено ч / день',
    th444: 'Потрачено часов',
    th1: 'Задача',
    th21: 'Запланировано',
    th22: 'часов',
    th31: 'Потрачено',
    th32: 'ч / день',
    th41: 'Потрачено',
    th42: 'часов',

    message:
      'Ваша коллекция задач пуста, воспользуйтесь кнопкой "Создать задачу"',
    sideBar: {
      goBack: 'Показать спринты',
      btnDesc: 'Создать спринт',
    },
    addTasksForm: {
      formTitle: 'Создание задачи',
      title: 'Название задачи',
      duration: 'Запланировано часов',
      validMin: 'Слишком короткое название, мин 4 символа!',
      validMax20: 'Слишком длинное название, макс 20 символов!',
      valMin: 'Мин 1 час!',
      valMax: 'Макс 8 часов!',
      validReq: 'Поле обязательное!',
    },
    chart: {
      labelone: 'Планируемый остаток трудозатрат',
      labeltwo: 'Актуальный остаток трудозатрат',
    },
    find: {
      label: 'Поиск',
      validMin: 'Слишком короткое название, мин 1 символ!',
      validMax20: 'Слишком длинное название, макс 20 символов!',
    },
  },
  btn: 'Готово',
  btnCancel: 'Отмена',
  nfp: {
    title: '404 Ой! Страница не найдена',
    link: 'Возможно вы потерялись? Hажмите чтобы вернуться на сайт.',
  },
  errors: {
    error409: 'Указанный адрес электронной почты уже существует',
    error403: 'Электронная почта или пароль неверны',
  },
  teamTitle: 'Наша команда',
};
