import { merge } from 'lodash';
import { RECEIVE_BOOKS, RECEIVE_NEW_BOOK, RECEIVE_BOOK_ERRORS, DELETE_BOOK } from '../actions/book_actions';

const BooksReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_BOOKS:
      return merge({}, state, action.books);
    case RECEIVE_NEW_BOOK:
      return merge({}, state, {
        [action.book.id]: action.book
      });
    case DELETE_BOOK:
      nextState = merge({}, state);
      delete nextState[action.book.id];
      return nextState;
    default:
      return state;
  }
};

export default BooksReducer;
