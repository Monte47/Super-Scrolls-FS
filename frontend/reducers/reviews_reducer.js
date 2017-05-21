import { merge } from 'lodash';
import { RECEIVE_REVIEWS, RECEIVE_REVIEW, DELETE_REVIEW } from '../actions/review_actions';

const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      return merge({}, state, {
        [action.review.id]: action.review
      });
    case DELETE_REVIEW:
      nextState = merge({}, state);
      delete nextState[action.review.id];
      return nextState;
    default:
      return state;
  }
};

export default ReviewsReducer;
