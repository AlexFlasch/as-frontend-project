import React from 'react';
import { useDispatch } from 'react-redux';

import { updateSearchTerm } from '../../store/actions';

import { StyledSearchHeader, StyledSearchInput } from './styles';

const SearchInput = props => {
  const dispatch = useDispatch();

  // the onChange should really be throttled to prevent mutating the redux state too quickly
  return (
    <StyledSearchHeader>
      <StyledSearchInput
        placeholder="Search for a user..."
        onChange={event => dispatch(updateSearchTerm(event.target.value))}
      />
    </StyledSearchHeader>
  );
};

export default SearchInput;
