import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

const BookshelvesIndexItem = ({ bookshelf }) => (
  <li className="bookshelf-index-item">
    <h3 className="booshelf-index-item-title">{bookshelf.name}</h3>
  </li>
);

export default withRouter(BookshelvesIndexItem);
