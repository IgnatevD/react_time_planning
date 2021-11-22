/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  apiAddSprintByProjectId,
  apiChangeSprintTitleById,
  apiGetSprintsByProjectId,
  apiRemoveSprintById,
} from '../../utils/apiServices';

const getSprint = createAsyncThunk(
  '/sprint/getSprint',

  async (id, { rejectWithValue }) => {
    try {
      const allSprints = await apiGetSprintsByProjectId(id);
      return Array.isArray(allSprints.sprints) ? allSprints : { sprints: [] };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const postSprint = createAsyncThunk(
  '/sprint/postSprint',
  async ({ projectId, body }, { rejectWithValue }) => {
    try {
      const newSprints = await apiAddSprintByProjectId(projectId, body);
      return newSprints;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const patchSprint = createAsyncThunk(
  '/sprint/patchSprint',
  async ({ id, title }, { rejectWithValue }) => {
    try {
      const newTitelSprint = await apiChangeSprintTitleById(id, { title });
      return { ...newTitelSprint, id };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const delSprint = createAsyncThunk(
  '/sprint/delSprint',
  async (id, { rejectWithValue }) => {
    try {
      await apiRemoveSprintById(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const sprintOperations = {
  postSprint,
  getSprint,
  patchSprint,
  delSprint,
};

export default sprintOperations;
