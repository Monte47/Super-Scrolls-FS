import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

const BooksIndexItem = ({ book }) => (
  <li className="books-index-item">
    <figure className="book-index-item-figure">
      <Link to={`/books/${book.id}`}>
        <img className="books-index-picture" src={book.image_url} alt={book.title} />
        <div className="book-index-item-title">{book.title}</div>
      </Link>
    </figure>
  </li>
);

export default BooksIndexItem;
