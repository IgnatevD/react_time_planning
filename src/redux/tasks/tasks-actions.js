import { createAction } from '@reduxjs/toolkit';

export const filterChange = createAction('tasks/changeFilter');

export const changeIndexCurrentDay = createAction(
  'tasks/changeIndexCurrentDay',
);
