import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

const BooksIndexItem = ({ book }) => (
  <li className="books-index-item">
    <figure>
      <Link to={`/books/${book.id}`}>
        <img className="books-index-picture" src={book.image_url} alt={book.title} />
      </Link>
    </figure>
  </li>
);

export default BooksIndexItem;
