import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '@redux/store';
import Rout from '@components/Route';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Rout />
      </div>
    </Provider>
  );
};

export default App;
