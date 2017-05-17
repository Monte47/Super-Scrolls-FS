import { merge } from 'lodash';
import { RECEIVE_BOOKS, RECEIVE_NEW_BOOK, RECEIVE_BOOK_ERRORS } from '../actions/book_actions';

const BooksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKS:
      return merge({}, state, action.books);
    case RECEIVE_NEW_BOOK:
      return merge({}, state, {
        [action.book.id]: action.book
      });
    default:
      return state;
  }
};

export default BooksReducer;
