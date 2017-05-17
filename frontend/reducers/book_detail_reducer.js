import { merge } from 'lodash';

import { RECEIVE_BOOK, RECEIVE_NEW_BOOK } from '../actions/book_actions';

const defaultBook = {
  title: "",
  author: "",
  description: "",
  image_url: ""
};

export default (state = defaultBook, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOK:
    case RECEIVE_NEW_BOOK:
      return merge({}, action.book);
    default:
      return state;
  }
};
