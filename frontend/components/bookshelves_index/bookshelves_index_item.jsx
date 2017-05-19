import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

class BookshelvesIndexItem extends React.Component {

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteBookshelf(this.props.bookshelf.id);
  }

  render() {
    const { bookshelf, deleteBookshelf } = this.props;
    return (
      <li className="bookshelf-index-item">
        <Link to={`bookshelves/${bookshelf.id}`}>
          <h3 className="booshelf-index-item-title">{bookshelf.name}</h3>
        </Link>
        <i id="delete-bookshelf-button" className="fa fa-times fa-5" onClick={this.handleDelete.bind(this)}></i>
      </li>
    );
  }
}

export default withRouter(BookshelvesIndexItem);
