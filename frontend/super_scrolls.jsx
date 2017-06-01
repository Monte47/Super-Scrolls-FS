import React from 'react';
import ReactDom from 'react-dom';
import { Route } from 'react-router-dom';
import configureStore from './store/store';
import Root from './components/root';

import { signup, login, logout } from './actions/session_actions';
import { createBook, receiveBooks, receiveBook, requestBooks, requestBook } from './actions/book_actions';
import { fetchBooks } from './util/book_api_util';
import { selectBooks } from './reducers/selectors';


document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser, bookshelves: window.currentUser.bookshelves } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');

  ReactDom.render(<Root store={store}/>, root);
});
