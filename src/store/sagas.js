import { takeLatest, put, call, select } from 'redux-saga/effects';

import { USERS_FETCH_REQUESTED } from './action-types';
import { fetchUsersSuccess, fetchUsersFail } from './actions';
import { getMoreUsersToken } from './selectors';

import { fetchUsers } from '../api';

function* initializeApp() {
  yield call(fetchUsersSaga);
}

function* fetchUsersSaga() {
  const moreUsersToken = yield select(getMoreUsersToken);

  const queryParams = [];
  if (moreUsersToken) {
    queryParams.push({ token: moreUsersToken });
  }

  try {
    const users = yield call(fetchUsers, queryParams);

    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield console.log(error);

    yield put(fetchUsersFail(error));
  }
}

export default function* rootSaga() {
  // run API calls, and any other required initialization steps
  yield call(initializeApp);

  yield takeLatest(USERS_FETCH_REQUESTED, fetchUsersSaga);
}
