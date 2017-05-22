import { RECEIVE_BOOK_ERRORS, CLEAR_ERRORS } from '../actions/book_actions';
import { RECEIVE_BOOKSHELF_ERRORS, DELETE_BOOKSHELF, RECEIVE_NEW_BOOKSHELF } from '../actions/bookshelf_actions';
import { RECEIVE_REVIEW_ERRORS } from '../actions/review_actions';

const ErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOK_ERRORS:
      return [...action.errors];
    case RECEIVE_BOOKSHELF_ERRORS:
      return [...action.errors];
    case RECEIVE_REVIEW_ERRORS:
      return [...action.errors];
    case CLEAR_ERRORS:
      return [];
    case DELETE_BOOKSHELF:
      return [];
    case RECEIVE_NEW_BOOKSHELF:
      return [];
    default:
      return state;
  }
};

export default ErrorsReducer;
