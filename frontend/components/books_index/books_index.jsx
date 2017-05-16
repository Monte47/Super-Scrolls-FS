import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import BooksIndexItem from './books_index_item';

class BooksIndex extends React.Component {

  componentDidMount() {
    this.props.requestBooks();
  }

  render() {
    const { books } = this.props;
    return (
      <section className="books-index">
        <ul>
          {books.map(book => <BooksIndexItem key={book.id} book={book} />)}
        </ul>
      </section>
    );
  }
}

export default withRouter(BooksIndex);
