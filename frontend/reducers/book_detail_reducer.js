import { merge } from 'lodash';

import { RECEIVE_BOOK, RECEIVE_NEW_BOOK } from '../actions/book_actions';

const defaultBook = {
  title: "",
  author: "",
  description: "",
  image_url: "",
  likes: [],
  liked: false
};

export default (state = defaultBook, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOK:
      return merge({}, action.book);
    case RECEIVE_NEW_BOOK:
      return merge({}, action.book);
    default:
      return state;
  }
};
