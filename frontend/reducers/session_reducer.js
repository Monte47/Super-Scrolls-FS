import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_SESSION_ERRORS } from '../actions/session_actions';

const _nullUser = { currentUser: null, errors: [], bookshelves: [], shelvings: [] };

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if(action.currentUser) {
        return {
          currentUser: action.currentUser,
          errors: [],
          bookshelves: action.currentUser.bookshelves,
          shelvings: action.currentUser.shelvings
        };
      } else {
        return {
          currentUser: action.currentUser,
          errors: [],
          bookshelves: [],
          shelvings: []
        };
      }
    case RECEIVE_ERRORS:
      return Object.assign({}, state, {errors: action.errors});
    case CLEAR_SESSION_ERRORS:
      return Object.assign({}, state, {errors: []});
    default:
      return state;
  }
};


export default SessionReducer;
