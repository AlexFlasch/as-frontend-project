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

  // don't send a token query param if we have no token to send
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

  // filter out any failed user details fetches
  users = users.filter(user => user !== undefined);

  // send our newly fetched users, as well as the new token to the redux store
  yield put(fetchUsersSuccess({ users, token }));
}

export default function* rootSaga() {
  // run API calls, and any other required initialization steps
  yield call(initializeApp);

  // this won't run by default when this saga is called from the createStore function
  // this will only run fetchUsersSaga when redux-saga sees the USERS_FETCH_REQUESTED action fired
  yield takeLatest(USERS_FETCH_REQUESTED, fetchUsersSaga);
}
