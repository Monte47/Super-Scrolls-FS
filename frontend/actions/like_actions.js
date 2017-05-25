export const CREATE_LIKE = "CREATE_LIKE";
export const DELETE_LIKE = "DELETE_LIKE";

import * as APIUtil from '../util/like_api_util';
import { requestBook } from './book_actions';

export const createLike = like => dispatch => {
  return APIUtil.createLike(like)
  .then(book => dispatch(requestBook(book.id)));
};

export const deleteLike = like => dispatch => {
  return APIUtil.destroyLike(like)
  .then(book => dispatch(requestBook(book.id)));
};
