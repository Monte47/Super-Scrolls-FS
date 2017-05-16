import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

const BooksIndexItem = ({ book }) => (
  <li className="books-index-item">
    <img src={book.image_url} alt={book.title} />
  </li>
);

export default BooksIndexItem;
