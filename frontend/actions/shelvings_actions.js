import * as APIUtil from '../util/shelving_api_util';
import { requestBookshelf } from './bookshelf_actions';
import { requestBook } from './book_actions';

export const createShelving = shelving => dispatch => {
  return APIUtil.createShelving(shelving)
  .then(book => dispatch(requestBook(book.id)));
};

export const destroyShelving = shelving => dispatch => {
  return APIUtil.destroyShelving(shelving).then(({bookshelf_id}) => dispatch(requestBookshelf(bookshelf_id)));
};
