export const createLike = like => {
  return $.ajax({
    method: "POST",
    url: 'api/likes',
    data: { like }
  });
};

export const destroyLike = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/likes/${id}`
  });
};
