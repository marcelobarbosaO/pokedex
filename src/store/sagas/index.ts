import { all, fork } from 'redux-saga/effects';
import { watchUser } from './User';

export default function* rootSaga() {
  return yield all([fork(watchUser)]);
}
