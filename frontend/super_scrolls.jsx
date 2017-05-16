import React from 'react';
import ReactDom from 'react-dom';
import { Route } from 'react-router-dom';
import configureStore from './store/store';
import Root from './components/root';

import { signup, login, logout } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.store = store;


  const root = document.getElementById('root');

  ReactDom.render(<Root store={store}/>, root);
});
