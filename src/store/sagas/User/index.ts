/* istanbul ignore file */
import { takeEvery, call, put } from 'redux-saga/effects';
import { api } from '@services/api';

import {
  logoutSuccess,
  errorResponse,
  logoutRequest,
  signInRequest,
  signInSuccess,
  saveToken,
  recoverPasswordRequest,
  recoverPasswordSuccess,
} from '../../slices/User';

async function login(email: string, password: string) {
  try {
    return await api.post('session', { email, password, platform: 'starter' });
  } catch (error: any) {
    if (error.response) {
      return error.response;
    }
    return error;
  }
}

async function forgotPassword(email: string) {
  try {
    return await api.put('account/password/recovery', { email, platform: 'starter' });
  } catch (error: any) {
    if (error.response) {
      return error.response;
    }
    return error;
  }
}

async function profile() {
  try {
    return await api.get('profile');
  } catch (error: any) {
    if (error.response) {
      return error.response;
    }
    return error;
  }
}

async function balance() {
  try {
    return await api.get('balance');
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
      const { token, platforms, needChangePassword } = response.data.data;

      yield put(saveToken(token));

      const {
        data: { data: profileResponse },
      } = yield call(profile);

      const {
        data: { data: balanceResponse },
      } = yield call(balance);

      const imageUrl =
        profileResponse.profile_photo &&
        profileResponse.profile_photo !== 'Photo' &&
        profileResponse.profile_photo !== ''
          ? `https://apiurl.com/static/${profileResponse.profile_photo}`
          : 'default';

      const user = {
        ...profileResponse,
        name: profileResponse.display_name || profileResponse.name,
        ...(profileResponse.starterAffiliate && {
          starterAffiliate: profileResponse.starterAffiliate,
        }),
        badge: 'rhino',
        balance: balanceResponse.balance,
        balanceAntecipation: balanceResponse.anticipation,
        balanceRelease: balanceResponse.release,
        profilePhoto: imageUrl,
        platforms,
        isChangePassword: needChangePassword,
      } as User;

      yield put(signInSuccess({ user }));
    } else {
      yield put(errorResponse(response?.data));
    }
  } catch (error: any) {
    yield put(errorResponse(error?.response.data));
  }
}

function* recoverPassword(action) {
  try {
    const { email } = action.payload;
    const response = yield call(forgotPassword, email);

    if (response?.status === 200) {
      yield put(recoverPasswordSuccess());
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
  yield takeEvery(recoverPasswordRequest, recoverPassword);
}
