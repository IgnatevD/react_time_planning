import { createSlice } from '@reduxjs/toolkit';
import { changeIndexCurrentDay, filterChange } from './tasks-actions';
import { addTask, deleteTask, editTask, fetchTasks } from './tasks-operations';

const initialState = {
  allTasks: [],
  filter: '',
  error: null,
  loading: false,
  currentDayIndex: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: {
    [addTask.pending](state) {
      state.loading = true;
    },
    [addTask.fulfilled](state, { payload }) {
      state.error = null;
      state.allTasks.push(payload);
      state.loading = false;
    },
    [addTask.rejected](state, { payload }) {
      state.error = payload;
      state.loading = false;
    },
    [fetchTasks.pending](state) {
      state.loading = true;
    },
    [fetchTasks.fulfilled](state, { payload }) {
      state.error = null;
      state.allTasks = payload;
      state.loading = false;
    },
    [fetchTasks.rejected](state, { payload }) {
      state.allTasks = [];
      state.error = payload;
      state.loading = false;
    },
    [deleteTask.pending](state) {
      state.loading = true;
    },
    [deleteTask.fulfilled](state, { payload }) {
      state.error = null;
      const removeIndex = state.allTasks.findIndex(({ id }) => id === payload);
      state.allTasks.splice(removeIndex, 1);
      state.loading = false;
    },
    [deleteTask.rejected](state, { payload }) {
      state.error = payload;
      state.loading = false;
    },
    [editTask.fulfilled](state, { payload }) {
      state.error = null;
      const editIndex = state.allTasks.findIndex(({ id }) => id === payload.id);
      let editTask = state.allTasks[editIndex];
      const newHoursWastedPerDay = editTask.hoursWastedPerDay.map(day => {
        if (day.currentDay === payload.date) {
          return { ...day, singleHoursWasted: payload.hours };
        }
        return day;
      });
      const newHoursWasted = payload.newWastedHours;
      editTask = {
        ...editTask,
        hoursWastedPerDay: newHoursWastedPerDay,
        hoursWasted: newHoursWasted,
      };
      state.allTasks[editIndex] = editTask;
    },
    [editTask.rejected](state, { payload }) {
      state.error = payload;
      state.loading = false;
    },
    [filterChange](state, { payload }) {
      state.filter = payload;
    },
    [changeIndexCurrentDay](state, { payload }) {
      state.currentDayIndex = payload;
    },
  },
});

export default tasksSlice.reducer;
