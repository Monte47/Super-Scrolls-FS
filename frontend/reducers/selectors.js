import { values } from 'lodash';

export const selectBooks = ({ books }) => values(books);

export const selectBook = (state, id) => (
  state.books[id] || {}
);

export const selectBookshelves = ({ bookshelves }) => values(bookshelves);
