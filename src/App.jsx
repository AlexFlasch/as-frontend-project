import React from 'react';
import { useSelector } from 'react-redux';

import { getLoaderState } from './store/selectors';

import Loader from './components/Loader';
import SearchInput from './components/SearchInput';
import UserList from './components/UserList';
import LoadMoreButton from './components/LoadMoreButton';

const App = props => {
  const isLoaderActive = useSelector(getLoaderState);

  return (
    <div className="App">
      <Loader visible={isLoaderActive} />
      <SearchInput />
      <UserList visible={!isLoaderActive} />
      <LoadMoreButton />
    </div>
  );
};

export default App;
