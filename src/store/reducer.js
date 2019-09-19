import {
  SEARCH_TERM_UPDATED,
  USERS_FETCH_REQUESTED,
  USERS_FETCH_SUCCEEDED,
  USERS_FETCH_FAILED,
} from './action-types';

const INITIAL_STATE = {
  searchTerm: '',
  users: [],
  moreUsersToken: undefined,
  isLoaderActive: true, // users will be fetched on page load, so start with loader active
  errors: {
    usersFetchError: null,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_TERM_UPDATED:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case USERS_FETCH_REQUESTED:
      return {
        ...state,
        isLoaderActive: true,
      };
    case USERS_FETCH_SUCCEEDED:
      return {
        ...state,
        users: [...state.users, ...action.payload.users],
        moreUsersToken: action.payload.token,
        isLoaderActive: false,
        errors: {
          usersFetch: null,
        },
      };
    case USERS_FETCH_FAILED:
      return {
        ...state,
        users: action.payload,
        isLoaderActive: false,
        errors: {
          ...state.errors,
          usersFetch: action.payload,
        },
      };
    default:
      return state;
  }
};
