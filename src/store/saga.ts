import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import axios from 'axios';

import { OFFICERS } from '../utils/api/endpoints';

import actions from './actions';

const {
  getUserInfo,
  getUserInfoSuccess,
  handleError,
} = actions;

function* callGetUserInfo({ payload: id }: { payload: number}) {
  try {
    const { data } = yield call(axios, `${OFFICERS}/${id}`);

    yield put(getUserInfoSuccess(data));
  } catch (error) {
    yield put(handleError({
      sagaName: 'callGetUserInfo',
      errorMessage: error.message,
    }));
  }
}

function* saga() {
  yield takeEvery(getUserInfo, callGetUserInfo);
}

export default saga;
