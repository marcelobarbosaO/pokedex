/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE: UserState = {
  user: null,
  token: null,
  error: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    ...INITIAL_STATE,
  },
  reducers: {
    saveToken(state, action) {
      const token = action.payload;

      return { ...state, token };
    },
    signInRequest(state, _action) {
      return { ...state, isLoading: true };
    },
    signInSuccess(state, action) {
      const { user } = action.payload;

      return {
        ...state,
        isLoading: false,
        user,
      };
    },
    errorResponse(state, action) {
      return {
        ...state,
        error: action?.payload || null,
        isLoading: false,
      };
    },
    logoutRequest() {},
    logoutSuccess() {
      return INITIAL_STATE;
    },
  },
});

export const {
  signInRequest,
  signInSuccess,
  logoutRequest,
  logoutSuccess,
  saveToken,
  errorResponse,
} = userSlice.actions;

export default userSlice.reducer;
