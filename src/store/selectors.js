import { createSelector } from 'reselect';

import isValidPhoneNumber from '../util/isValidPhoneNumber';

export const getLoaderState = state => state.isLoaderActive;
export const getMoreUsersToken = state => state.moreUsersToken;
export const getAllUsers = state => state.users;
export const getSearchTerm = state => state.searchTerm;

// create a memoized selector here since we're doing some computations to find what
// users we actually want to display in the UI
// no need to recompute this on every render if the result hasn't changed
export const getUsers = createSelector(
  getAllUsers,
  getSearchTerm,
  (users, searchTerm) => {
    return users
      .filter(user => isValidPhoneNumber(user.number))
      .filter(user => user.name.includes(searchTerm));
  },
);
