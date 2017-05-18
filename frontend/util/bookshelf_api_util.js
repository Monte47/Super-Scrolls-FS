export const fetchBookshelves = () => (
  $.ajax({
    method: "GET",
    url: 'api/bookshelves'
  })
);

export const fetchBookshelf = (id) => (
  $.ajax({
    method: "GET",
    url: `api/bookshelves/${id}`
  })
);

export const createBookshelf = (bookshelf) => {
  return $.ajax({
    method: "POST",
    url: 'api/bookshelves',
    data: { bookshelf }
  });
};

export const patchBookshelf = (bookshelf) => (
  $.ajax({
    method: "PATCH",
    url: `api/bookshelves/${bookshelf.id}`,
    data: { bookshelf }
  })
);

export const destroyBookshelf = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/bookshelves/${id}`
  })
);
