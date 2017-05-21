export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const CREATE_REVIEW = "CREATE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS";
export const UPDATE_REVIEW = "UPDATE_REVIEW";

import * as APIUtil from '../util/review_api_util';

export const clearReviewErrors = errors => ({
  type: CLEAR_REVIEW_ERRORS
});

export const requestReviews = () => dispatch => {
  return APIUtil.fectchReviews().then(reviews => dispatch(receiveReviews(reviews)));
};

export const createReview = review => dispatch => {
  return APIUtil.createReview(review).then(review => {
    dispatch(receiveReview(review));
    return review;
  }, err => dispatch(receiveReviewErrors(err.responseJSON)));
};

export const destroyReview = id => dispatch => {
  return APIUtil.destroyReview(id).then(review => dispatch(deleteReview(review)), () => console.log("error"));
};

export const updateReview = review => dispatch => {
  return APIUtil.patchReview(review).then(review => {
    dispatch(receiveReview(review));
    return review;
  }, err => dispatch(receiveReviewErrors(err.responseJSON)));
};

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const deleteReview = review => ({
  type: DELETE_REVIEW,
  review
});

export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});
