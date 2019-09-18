import React from 'react';
import { useSelector } from 'react-redux';

import { getLoaderState } from './store/selectors';

import Loader from './components/Loader';
import SearchInput from './components/SearchInput';

const App = props => {
  const isLoaderActive = useSelector(getLoaderState);

  return (
    <div className="App">
      <Loader visible={isLoaderActive} />
      <SearchInput />
    </div>
  );
};

export default App;
