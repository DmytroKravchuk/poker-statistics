import { takeEvery, delay } from 'redux-saga/effects';
import * as TYPES from '../constants';

function* handleAuth() {
  yield delay(5000);
}

export default function* rootSaga() {
  yield takeEvery([TYPES.AUTH], handleAuth);
}
