// export const fetchShelvings = () => {
//   $.ajax({
//     method: "GET",
//     url: 'api/shelvings'
//   });
// };
//
// export const fetchShelving = (id) => {
//   $.ajax({
//     method: "GET",
//     url: `api/shelvings/${id}`
//   });
// };

export const createShelving = (shelving) => {
  return $.ajax({
    method: "POST",
    url: 'api/shelvings',
    data: { shelving }
  });
};

export const destroyShelving = (shelving) => {
  debugger
  return $.ajax({
    method: "DELETE",
    url: 'api/shelvings/',
    data: { shelving }
  });
};
