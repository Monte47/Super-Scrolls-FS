import { merge } from 'lodash';
import { RECEIVE_BOOKSHELVES, RECEIVE_NEW_BOOKSHELF, DELETE_BOOKSHELF } from '../actions/bookshelf_actions';

const BookshelfReducer = (state={}, action) => {
  Object.freeze(state);
  let nexState;
  switch (action.type) {
    case RECEIVE_BOOKSHELVES:
      return merge({}, action.bookshelves);
    case RECEIVE_NEW_BOOKSHELF:
      return merge({}, state, {
        [action.bookshelf.id]: action.bookshelf
      });
    case DELETE_BOOKSHELF:
      nexState = merge({}, state);
      delete nexState[action.bookshelf.id];
      return nexState;
    default:
      return state;
  }
};

export default BookshelfReducer;
