import { merge } from 'lodash';
import { RECEIVE_BOOKSHELF, RECEIVE_NEW_BOOKSHELF } from '../actions/bookshelf_actions';

const defaultBookshelf = {
  name: "",
};

export default (state = defaultBookshelf, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKSHELF:
      return merge({}, action.bookshelf);
    case RECEIVE_NEW_BOOKSHELF:
      return merge({}, action.bookshelf);
    default:
      return state;
  }
};
