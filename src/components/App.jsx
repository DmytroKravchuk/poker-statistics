import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '@redux/store';
import LoginPage from '@components/LoginPage';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div className="App">
      <LoginPage />
    </div>
  </Provider>
);

export default App;
