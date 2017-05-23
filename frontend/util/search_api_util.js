export const fetchSearch = (searchStr) => {
  return $.ajax({
    method: 'GET',
    url: 'api/books',
    data: { searchStr }
  });
};
