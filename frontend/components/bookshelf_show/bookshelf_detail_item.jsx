import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

class BookshelfDetailItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handleRedirect(e) {
    e.preventDefault();
    this.props.history.push(`/books/${this.props.book.id}`);
  }

  handleDeleteShelving(e) {
    e.preventDefault();
    this.props.deleteShelving({book_id: this.props.book.id, bookshelf_id: this.props.bookshelfId});
  }

  render() {
    const { book } = this.props;
    return (
      <li className="bookshelf-books-list-item">
        <img className="bookshelf-list-item-cover" onClick={this.handleRedirect} src={book.image_url} alt={book.title} />
        <div className="bookshelf-list-item-details">
          <h2 onClick={this.handleRedirect}>{book.title}</h2>
          <h3>{book.author}</h3>
          <i id="delete-shelving-button" className="fa fa-times fa-5" onClick={this.handleDeleteShelving.bind(this)}></i>
        </div>
      </li>
    );
  }
}

export default withRouter(BookshelfDetailItem);
