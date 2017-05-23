import * as APIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

export const requestSearch = searchStr => dispatch => {
  return APIUtil.fetchSearch(searchStr).then(results => dispatch(receiveSearchResults(results)));
};


export const receiveSearchResults = searchResults => ({
  type: RECEIVE_SEARCH_RESULTS,
  searchResults
});
