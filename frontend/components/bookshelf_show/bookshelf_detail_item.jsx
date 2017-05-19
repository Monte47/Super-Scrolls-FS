import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

class BookshelfDetailItem extends React.Component {

  handleDebugger(e) {
    e.preventDefault();
    debugger;
  }

  render() {
    const { book } = this.props;
    return (
      <li className="bookshelf-books-list-item">
        <img className="bookshelf-list-item-cover" src={book.image_url} alt={book.title} />
        <div className="bookshelf-list-item-details">
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
        </div>
      </li>
    );
  }
}

export default BookshelfDetailItem;
