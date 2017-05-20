export const createShelving = (shelving) => {
  debugger;
  return $.ajax({
    method: "POST",
    url: 'api/shelvings',
    data: { shelving }
  });
};

export const destroyShelving = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/shelvings/${id}`
  });
};
