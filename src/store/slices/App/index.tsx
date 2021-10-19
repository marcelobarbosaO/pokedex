import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE: AppState = {
  filters: ['all'],
};

const appSlice = createSlice({
  name: 'app',
  initialState: {
    ...INITIAL_STATE,
  },
  reducers: {
    updateFilters(state, action) {
      return { ...state, filters: action.payload };
    },
  },
});

export const { updateFilters } = appSlice.actions;

export default appSlice.reducer;
