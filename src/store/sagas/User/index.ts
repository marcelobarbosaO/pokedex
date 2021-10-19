/* istanbul ignore file */
import { takeEvery, call, put } from 'redux-saga/effects';
import { apiAuth } from '@services/api';

import {
  logoutSuccess,
  errorResponse,
  logoutRequest,
  signInRequest,
  signInSuccess,
  saveToken,
} from '../../slices/User';

async function login(email: string, password: string) {
  try {
    return await apiAuth.post('login', { email, password });
  } catch (error: any) {
    if (error.response) {
      return error.response;
    }
    return error;
  }
}

function* signIn(action) {
  try {
    const { email, password } = action.payload;
    const response = yield call(login, email, password);

    if (response?.status === 200) {
      const { token } = response.data;

      yield put(saveToken(token));
      const user = {
        name: 'User Teste',
        email,
      } as User;

      yield put(signInSuccess({ user }));
    } else {
      yield put(errorResponse(response?.data));
    }
  } catch (error: any) {
    yield put(errorResponse(error?.response.data));
  }
}

function* signOut() {
  yield put(logoutSuccess());
}

export function* watchUser() {
  yield takeEvery(signInRequest, signIn);
  yield takeEvery(logoutRequest, signOut);
}
