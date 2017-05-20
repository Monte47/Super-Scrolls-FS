// export const RECEIVE_SHELVINGS = "RECEIVE_SHELVINGS";
// export const RECEIVE_SHELVING = "RECEIVE_SHELVING";
// export const CREATE_SHELVING = "CREATE_SHELVING";
// export const DELETE_SHELVING = "DELETE_SHELVING";

import * as APIUtil from '../util/shelving_api_util';
import { requestBookshelf } from './bookshelf_actions';

// export const requestShelvings = () => dispatch => {
//   return APIUtil.fetchShelvings().then(shelvings => receiveShelvings(shelvings));
// };
//
// export const requestShelving = id => dispatch => {
//   return APIUtil.fetchShelving(id).then(shelving => receiveShelving(shelving));
// };

export const createShelving = shelving => dispatch => {
  return APIUtil.createShelving(shelving);
};

export const destroyShelving = shelving => dispatch => {
  return APIUtil.destroyShelving(shelving).then(({bookshelf_id}) => dispatch(requestBookshelf(bookshelf_id)));
};

// export const receiveShelvings = shelvings => ({
//   type: RECEIVE_SHELVINGS,
//   shelvings
// });
//
// export const receiveShelving = shelving => ({
//   type: RECEIVE_SHELVING,
//   shelving
// });

// export const deleteShelving = shelving => ({
//   type: DELETE_SHELVING,
//   shelving
// });
