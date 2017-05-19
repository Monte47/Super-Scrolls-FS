import { values } from 'lodash';

export const selectBooks = ({ books }) => {
  return values(books);
};

export const selectBook = (state, id) => (
  state.books[id] || {}
);

export const selectBookshelves = ({ bookshelves }) => values(bookshelves);
