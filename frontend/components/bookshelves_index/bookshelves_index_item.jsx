import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

class BookshelvesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.xbutton = this.xbutton.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteBookshelf(this.props.bookshelf.id);
  }

  xbutton() {
    debugger;
    if (this.props.bookshelf && !this.props.bookshelf.default_shelf) {
      return (
        <i id="delete-bookshelf-button" className="fa fa-times fa-5" onClick={this.handleDelete.bind(this)}></i>
      );
    }
  }

  render() {
    const { bookshelf, deleteBookshelf } = this.props;
    return (
      <li className="bookshelf-index-item">
        <Link to={`/bookshelves/${bookshelf.id}`}>
          <h3 className="booshelf-index-item-title">{bookshelf.name}</h3>
        </Link>
        {this.xbutton()}
      </li>
    );
  }
}

export default withRouter(BookshelvesIndexItem);
