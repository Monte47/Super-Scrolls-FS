import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import configureStore from './store/store';

import { signup, login, logout } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {

  let store = configureStore();

  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.store = store;


  const root = document.getElementById('root');

  const Root = () => (
    <Provider store={store}>
      <HashRouter>
        <h1>React is not working...yet</h1>
      </HashRouter>
    </Provider>
  );

  ReactDom.render(<Root />, root);
});
