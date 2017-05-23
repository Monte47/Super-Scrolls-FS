export const RECEIVE_BOOKS = "RECEIVE_BOOKS";
export const RECEIVE_BOOK = "RECEIVE_BOOK";
export const CREATE_BOOK = "CREATE_BOOK";
export const DELETE_BOOK = "DELETE_BOOK";
export const RECEIVE_NEW_BOOK = "RECEIVE_NEW_BOOK";
export const RECEIVE_BOOK_ERRORS = "RECEIVE_BOOK_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const UPDATE_BOOK = "UPDATE_BOOK";

import * as APIUtil from '../util/book_api_util';

export const clearErrors = errors => ({
  type: CLEAR_ERRORS,
  errors
});

export const requestBooks = offset => dispatch => {
  return APIUtil.fetchBooks(offset).then(books => dispatch(receiveBooks(books)));
};

export const requestBook = (id) => dispatch => {
  return APIUtil.fetchBook(id).then(book => dispatch(receiveBook(book)));
};

export const createBook = book => dispatch => {
  return APIUtil.createBook(book).then(book => {
    dispatch(receiveNewBook(book));
    return book;
  }, err => dispatch(receiveBookErrors(err.responseJSON)));
};

export const destroyBook = (id) => dispatch => {
  return APIUtil.destroyBook(id).then(book => dispatch(deleteBook(book)), () => console.log("error"));
};

export const updateBook = book => dispatch => {
  return APIUtil.patchBook(book).then(book => {
    dispatch(receiveNewBook(book));
    return book;
  }, err => dispatch(receiveBookErrors(err.responseJSON)));
};

export const receiveBooks = books => ({
  type: RECEIVE_BOOKS,
  books
});

export const receiveBook = book => ({
  type: RECEIVE_BOOK,
  book
});

export const receiveNewBook = book => ({
  type: RECEIVE_NEW_BOOK,
  book
});

export const deleteBook = book => ({
  type: DELETE_BOOK,
  book
});

export const receiveBookErrors = errors => ({
  type: RECEIVE_BOOK_ERRORS,
  errors
});
