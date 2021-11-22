import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  addProjectMembers,
  addProjects,
  deleteProjects,
  getProjects,
  patchProject,
} from './projectOperations.js';

const projectsReducer = createReducer([], {
  [getProjects.fulfilled]: (_, { payload }) => payload,
  [addProjects.fulfilled]: (state, { payload }) => [...state, payload],
  [patchProject.fulfilled]: (state, { payload }) =>
    state.map(item =>
      item._id === payload.projectId ? { ...item, title: payload.title } : item,
    ),
  [addProjectMembers.fulfilled]: (state, { payload }) =>
    state.map(item =>
      item._id === payload.projectId
        ? { ...item, members: payload.members }
        : item,
    ),
  [deleteProjects.fulfilled]: (state, { payload }) =>
    state.filter(project => project._id !== payload),
});

const isLoadingReducer = createReducer(false, {
  [getProjects.pending]: () => true,
  [getProjects.fulfilled]: () => false,
  [getProjects.rejected]: () => false,
  [addProjects.pending]: () => true,
  [addProjects.fulfilled]: () => false,
  [addProjects.rejected]: () => false,
  [deleteProjects.pending]: () => true,
  [deleteProjects.fulfilled]: () => false,
  [deleteProjects.rejected]: () => false,
  [patchProject.pending]: () => true,
  [patchProject.fulfilled]: () => false,
  [patchProject.rejected]: () => false,
  [addProjectMembers.pending]: () => true,
  [addProjectMembers.fulfilled]: () => false,
  [addProjectMembers.rejected]: () => false,
});

const setError = (_, { payload }) => payload;
const resetError = () => null;

const errorReducer = createReducer(null, {
  [getProjects.pending]: resetError,
  [getProjects.rejected]: setError,
  [addProjects.pending]: resetError,
  [addProjects.rejected]: setError,
  [deleteProjects.pending]: resetError,
  [deleteProjects.rejected]: setError,
  [patchProject.pending]: resetError,
  [patchProject.rejected]: setError,
  [addProjectMembers.pending]: resetError,
  [addProjectMembers.rejected]: setError,
});

const allProjectsReducers = combineReducers({
  projects: projectsReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export default allProjectsReducers;
