export const fetchBooks = () => (
  $.ajax({
    method: 'GET',
    url: 'api/books'
  })
);

export const fetchBook = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/books/${id}`
  })
);

export const createBook = (book) => (
  $.ajax({
    method: 'POST',
    url: 'api/books'
  })
);

export const patchBook = (book) => (
  $.ajax({
    method: 'PATCH',
    url: `api/books/${book.id}`,
    data: { book }
  })
);

export const destroyBook = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/books/${id}`
  })
);
