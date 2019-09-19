import { takeLatest, put, call, select, all } from 'redux-saga/effects';

import { USERS_FETCH_REQUESTED } from './action-types';
import { fetchUsersSuccess, fetchUsersFail } from './actions';
import { getMoreUsersToken } from './selectors';

import { fetchUsersListPage, fetchUserDetails } from '../api';

function* initializeApp() {
  yield call(fetchUsersSaga);
}

function* fetchUsersListPageSaga(token) {
  const queryParams = [];
  if (token) {
    queryParams.push({ token });
  }

  try {
    const usersListPage = yield call(fetchUsersListPage, queryParams);

    return usersListPage;
  } catch (error) {
    yield put(fetchUsersFail(error));
  }
}

function* fetchUserDetailsSaga(userId) {
  try {
    const userDetails = yield call(fetchUserDetails, userId);

    return userDetails;
  } catch (error) {
    // in case of failure to fetch user details, return undefined to avoid adding bad data to the user array
    return undefined;
  }
}

function* fetchUsersSaga() {
  const currentToken = yield select(getMoreUsersToken);

  const { result: userIds, token } = yield call(
    fetchUsersListPageSaga,
    currentToken,
  );

  // grab details for every user after we've gotten a list of Ids
  let users = yield all(
    userIds.map(userId => call(fetchUserDetailsSaga, userId)),
  );

  users = users.filter(user => user !== undefined);

  yield put(fetchUsersSuccess({ users, token }));
}

export default function* rootSaga() {
  // run API calls, and any other required initialization steps
  yield call(initializeApp);

  yield takeLatest(USERS_FETCH_REQUESTED, fetchUsersSaga);
}
