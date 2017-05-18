export const RECEIVE_BOOKSHELVES = "RECEIVE_BOOKSHELVES";
export const RECEIVE_BOOKSHELF = "RECEIVE_BOOKSHELF";
export const CREATE_BOOKSHELF = "CREATE_BOOKSHELF";
export const DELETE_BOOKSHELF = "DELETE_BOOKSHELF";
export const RECEIVE_NEW_BOOKSHELF = "RECEIVE_NEW_BOOKSHELF";
export const RECEIVE_BOOKSHELF_ERRORS = "RECEIVE_BOOKSHELF_ERRORS";
export const CLEAR_BOOKSHELF_ERRORS = "CLEAR_BOOKSHELF_ERRORS";
export const UPDATE_BOOKSHELF = "UPDATE_BOOKSHELF";

import * as APIUTIL from '../util/bookshelf_api_util';

export const clearBookshelfErrors = errors => ({
  type: CLEAR_BOOKSHELF_ERRORS,
  errors
});

export const requestBookshelves = () => dispatch => {
  return APIUTIL.fetchBookshelves().then(bookshelves => dispatch(receiveBookshelves(bookshelves)));
};

export const requestBookshelf = (id) => dispatch => {
  return APIUTIL.fetchBookshelf(id).then(bookshelf => dispatch(receiveBookshelf(bookshelf)));
};


export const createBookshelf = bookshelf => dispatch => {
  return APIUTIL.createBookshelf(bookshelf).then(bookshelf => {
    dispatch(receiveNewBookshelf(bookshelf));
    return bookshelf;
  }, err => dispatch(receiveBookshelfErrors(err.responseJSON)));
};

export const destroyBookshelf = (id) => dispatch => {
  return APIUTIL.destroyBookshelf(id).then(bookshelf => dispatch(deleteBookshelf(bookshelf)), () => console.log("error"));
};

export const updateBookshelf = bookshelf => dispatch => {
  return APIUTIL.patchBookshelf(book).then(book => {
    dispatch(receiveNewBookshelf(bookshelf));
    return book;
  }, err => dispatch(receiveBookshelfErrors(err.responseJSON)));
};

export const receiveBookshelves = bookshelves => ({
  type: RECEIVE_BOOKSHELVES,
  bookshelves
});

export const receiveBookshelf = bookshelf =>({
  type: RECEIVE_BOOKSHELF,
  bookshelf
});

export const receiveNewBookshelf = bookshelf => ({
  type: RECEIVE_NEW_BOOKSHELF,
  bookshelf
});

export const deleteBookshelf = bookshelf => ({
  type: DELETE_BOOKSHELF,
  bookshelf
});

export const receiveBookshelfErrors = errors => ({
  type: RECEIVE_BOOKSHELF_ERRORS,
  errors
});
