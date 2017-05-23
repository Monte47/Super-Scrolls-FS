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
    let books1 = books.slice(0,3);
    let books2 = books.slice(3);
    return (
      <div>
        <section className="books-index">
          <Link to="/book/new">
            <button type="button" className="new-book-button">New Book</button>
          </Link>
          <ul>
            {books1.map(book => <BooksIndexItem key={book.id} book={book} />)}
          </ul>
          <ul className="second-ul">
            {books2.map(book => <BooksIndexItem key={book.id} book={book} />)}
          </ul>
        </section>
        <div className="second-box"></div>
      </div>
    );
  }
}

export default withRouter(BooksIndex);
