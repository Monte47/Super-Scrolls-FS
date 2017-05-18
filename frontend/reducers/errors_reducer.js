import { RECEIVE_BOOK_ERRORS, CLEAR_BOOK_ERRORS } from '../actions/book_actions';
import { RECEIVE_BOOKSHELF_ERRORS } from '../actions/bookshelf_actions';

const ErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOK_ERRORS:
      return [...action.errors];
    case RECEIVE_BOOKSHELF_ERRORS:
      return [...action.errors];
    case CLEAR_BOOK_ERRORS:
      return [];
    default:
      return state;
  }
};

export default ErrorsReducer;
