import { RECEIVE_BOOK_ERRORS } from '../actions/book_actions';
import { RECEIVE_ERRORS } from '../actions/session_actions';

const ErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOK_ERRORS:
      return [...action.errors];
    default:
      return state;
  }
};

export default ErrorsReducer;
