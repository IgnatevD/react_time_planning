import { registerLocale } from 'react-datepicker';
import en from 'date-fns/locale/en-GB';

const calendarLocale = 'en';
registerLocale(calendarLocale, en);

export const english = {
  calendarLocale,
  title: 'english',
  originalTitle: 'EN',
  momentTitle: 'en-gb',
  //originalTitle: 'english',
  header: {
    //     burgerMenu: {
    //       toggleTheme: 'Dark theme',
    //       changeLanguage: 'Language',
    //     },
    userMenu: { btnText: 'Log Out' },
  },
  auth: {
    authForm: {
      signUpTitle: 'Registration',
      signInTitle: 'Authentication',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm password',
      btnSignUp: 'Sign Up',
      signUpQuestion: 'Have you got an account?',
      signUpLink: 'Sign In',
      btnSignIn: 'Sign In',
      signInQuestion: "Haven't got an account yet?",
      signInLink: 'Sign Up',
      validEmail: 'Invalid email',
      validEmailReq: 'Email is required',
      validMin: 'Password must be at least 7 characters long',
      validMax: 'The password must not exceed 20 characters',
      validPasReq: 'Password is required',
      validPas: 'Passwords do not match',
      validCPasReq: 'Confirmation password is required',
    },
  },
  projects: {
    pageTitle: 'Projects',
    pageAddBtn: 'Сreate project',
    message:
      'Your project collection is empty, use the "Create project" button',
    addProjectsForm: {
      formTitle: 'Project creation',
      title: 'Project name',
      description: 'Description',
      validMin: 'Name too short, min 2 characters!',
      validMax12: 'Name is too long, max 20 characters!',
      validMax70: 'Name is too long, max 70 characters!',
      validReq: 'Field is required!',
    },
  },
  sprints: {
    pageAddBtn: 'Create sprint',
    addMembers: 'Add members',
    message: 'Your sprint collection is empty, use the "Create Sprint" button',
    sideBar: {
      goBack: 'Show projects',
      btnDesc: 'Сreate project',
    },
    addSprintsForm: {
      formTitle: 'Sprint creation',
      title: 'Sprint name',
      startDate: 'Start date',
      endDate: 'Expire date',
      duration: 'Duration',
      prevDays: 'Previous days',
      validReq: 'Field is required!',
      validMin: 'Min 2 days',
    },
    addMem: {
      email: 'Enter Email',
      addedMem: 'Added users :',
      message: 'You have not added any users yet',
      validEmail: 'Invalid email',
    },
  },
  tasks: {
    pageAddBtn: 'Create task',
    th111: 'Task',
    th222: 'Scheduled hours',
    th333: 'Spent hours / day ',
    th444: 'Spent hours',
    th1: 'Task',
    th21: 'Scheduled',
    th22: 'hours',
    th31: 'Spent',
    th32: 'hours / day',
    th41: 'Spent',
    th42: 'hours',

    message: 'Your task collection is empty, use the "Create task" button',
    sideBar: {
      goBack: 'Show sprints',
      btnDesc: 'Create sprint',
    },
    addTasksForm: {
      formTitle: 'Task creation',
      title: 'Task name',
      duration: 'Scheduled hours',
      validMin: 'Name too short, min 4 characters!',
      validMax20: 'Name is too long, max 20 characters!',
      valMin: 'Min 1 hour!',
      valMax: 'Max 8 hours!',
      validReq: 'Field is required!',
    },
    chart: {
      labelone: 'Planned balance of labor costs',
      labeltwo: 'Actual balance of labor costs',
    },
    find: {
      label: 'Search',
      validMin: 'Name too short, min 1 characters!',
      validMax20: 'Name is too long, max 20 characters!',
    },
  },
  btn: 'Create',
  btnCancel: 'Cancel',
  nfp: {
    title: '404 Oh! Page not found',
    link: "Maybe you're lost? Click to return to the site.",
  },
  errors: {
    error409: 'Provided email already exists',
    error403: 'Email or Password is wrong',
  },
  teamTitle: 'Our Team',
};
