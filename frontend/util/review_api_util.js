export const fectchReviews = () => (
  $.ajax({
    method: "GET",
    url: 'api/reviews'
  })
);

export const createReview = review => {
  return $.ajax({
    method: "POST",
    url: 'api/reviews'
  });
};

export const patchReview = review => {
  return $.ajax({
    method: "PATCH",
    url: `api/reviews/${review.id}`
  });
};

export const destroyReview = id => {
  return $.ajax({
    method: "PATCH",
    url: `api/reviews/${id}`
  });
};
