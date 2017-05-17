import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import BooksIndexItem from './books_index_item';

class BooksIndex extends React.Component {

  componentDidMount() {
    this.props.requestBooks();
  }

  componentWillMount() {
    this.props.requestBooks();
  }

  render() {
    const { books } = this.props;
    return (
      <section className="books-index">
        <Link to="/book/new">
          <button type="button" className="new-book-button">New Book</button>
        </Link>
        <ul>
          {books.map(book => <BooksIndexItem key={book.id} book={book} />)}
        </ul>
      </section>
    );
  }
}

export default withRouter(BooksIndex);
