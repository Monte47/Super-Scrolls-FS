// import { merge } from 'lodash';
// import { RECEIVE_SHELVINGS, DELETE_SHELVING } from '../actions/shelvings_actions';
//
// const ShelvingsReducer = (state = {}, action) => {
//   Object.freeze(state);
//   let nextState;
//   switch (action.type) {
//     case RECEIVE_SHELVINGS:
//       return merge({}, action.shelving);
//     case DELETE_SHELVING:
//       nextState = merge({}, state);
//       delete nextState[action.shelving.id];
//       return nextState;
//     default:
//       return state;
//   }
// };
//
// export default ShelvingsReducer;
