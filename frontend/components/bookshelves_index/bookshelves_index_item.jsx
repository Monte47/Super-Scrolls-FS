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
        <h3 className="booshelf-index-item-title">{bookshelf.name}</h3>
        <button id="delete-bookshelf-button" type="button" onClick={this.handleDelete.bind(this)}>DEL</button>
      </li>
    );
  }
}

export default withRouter(BookshelvesIndexItem);
