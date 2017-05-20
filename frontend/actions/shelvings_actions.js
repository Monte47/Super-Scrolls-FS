export const CREATE_SHELVING = "CREATE_SHELVING";
export const DELETE_SHELVING = "DELETE_SHELVING";

import * as APIUtil from '../util/shelving_api_util';

export const createShelving = shelving => dispatch => {
  return APIUtil.createShelving(shelving);
};

export const deleteShelving = id => dispatch => {
  return APIUtil.deleteShelving(id);
};
