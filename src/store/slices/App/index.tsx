import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_FILTER } from '@utils/constants';

const INITIAL_STATE: AppState = {
  filters: [DEFAULT_FILTER],
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
