import {
  SEARCH_TERM_UPDATED,
  USERS_FETCH_REQUESTED,
  USERS_FETCH_SUCCEEDED,
  USERS_FETCH_FAILED,
} from './action-types';

export const updateSearchTerm = payload => ({
  type: SEARCH_TERM_UPDATED,
  payload,
});

export const fetchUsers = payload => ({
  type: USERS_FETCH_REQUESTED,
  payload,
});

export const fetchUsersSuccess = payload => ({
  type: USERS_FETCH_SUCCEEDED,
  payload,
});

export const fetchUsersFail = payload => ({
  type: USERS_FETCH_FAILED,
  payload,
});
