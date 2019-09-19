import { createSelector } from 'reselect';

import isValidPhoneNumber from '../util/isValidPhoneNumber';

export const getLoaderState = state => state.isLoaderActive;
export const getMoreUsersToken = state => state.moreUsersToken;
export const getAllUsers = state => state.users;
export const getSearchTerm = state => state.searchTerm;

export const getUsers = createSelector(
  getAllUsers,
  getSearchTerm,
  (users, searchTerm) => {
    return users
      .filter(user => isValidPhoneNumber(user.number))
      .filter(user => user.name.includes(searchTerm));
  },
);
