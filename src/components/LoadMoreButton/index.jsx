import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from '../../store/actions';
import { getMoreUsersToken } from '../../store/selectors';

import { StyledLoadMoreButton } from './styles';

const LoadMoreButton = props => {
  const dispatch = useDispatch();
  const moreUsersToken = useSelector(getMoreUsersToken);

  return moreUsersToken !== undefined ? (
    <StyledLoadMoreButton onClick={() => dispatch(fetchUsers())}>
      Load More Users
    </StyledLoadMoreButton>
  ) : null;
};

export default LoadMoreButton;
