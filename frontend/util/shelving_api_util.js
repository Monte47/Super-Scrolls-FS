export const createShelving = (shelving) => {
  return $.ajax({
    method: "POST",
    url: 'api/shelvings',
    data: { shelving }
  });
};

export const destroyShelving = (shelving) => {
  return $.ajax({
    method: "DELETE",
    url: 'api/shelvings/',
    data: { shelving }
  });
};
