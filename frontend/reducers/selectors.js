import { values } from 'lodash';

export const selectBooks = ({ books }) => {
  return values(books);
};

export const selectSearchResults = ({ searchResults }) => {
  return values(searchResults) || [];
};

export const selectBook = (state, id) => (
  state.books[id] || {}
);

export const selectBookshelves = ({ bookshelves }) => values(bookshelves);

export const selectReviews = ({ reviews }) => values(reviews);
