import { createSlice } from '@reduxjs/toolkit';
import { sprintClearState } from './sprin-actions';
import sprintOperations from './sprin-operations';

const initialState = {
  items: null,
  isLoading: false,

  error: null,
};

const sprintSlice = createSlice({
  name: 'sprints',
  initialState,
  extraReducers: {
    [sprintClearState](state) {
      state.items = null;
    },

    // getSprint
    [sprintOperations.getSprint.pending](state, { payload }) {
      state.isLoading = true;
    },
    [sprintOperations.getSprint.fulfilled](state, { payload }) {
      state.items = payload.sprints;

      state.isLoading = false;
      state.isLogIn = true;
    },
    [sprintOperations.getSprint.rejected](state, { payload }) {
      state.error = payload;
      state.isLoading = false;
    },

    // postSprint
    [sprintOperations.postSprint.pending](state, { payload }) {
      state.isLoading = true;
    },
    [sprintOperations.postSprint.fulfilled](state, { payload }) {
      const newPayload = { ...payload, _id: payload.id };
      state.items = [...(state.items || []), newPayload];
      state.isLogIn = true;
      state.isLoading = false;
    },
    [sprintOperations.postSprint.rejected](state, { payload }) {
      state.error = payload;
      state.isLoading = false;
    },

    // patchSprint
    [sprintOperations.patchSprint.pending](state, { payload }) {
      state.isLoading = true;
    },
    [sprintOperations.patchSprint.fulfilled](state, { payload }) {
      state.items = state.items.map(el =>
        el._id === payload.id ? { ...el, title: payload.newTitle } : el,
      );
      state.isLogIn = true;
      state.isLoading = false;
    },
    [sprintOperations.patchSprint.rejected](state, { payload }) {
      state.error = payload;
      state.isLoading = false;
    },

    // delSprint
    [sprintOperations.delSprint.pending](state, { payload }) {
      state.isLoading = true;
    },
    [sprintOperations.delSprint.fulfilled](state, { payload }) {
      state.items = state.items.filter(({ _id }) => _id !== payload);
      state.isLogIn = true;
      state.isLoading = false;
    },
    [sprintOperations.patchSprint.rejected](state, { payload }) {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export default sprintSlice.reducer;
