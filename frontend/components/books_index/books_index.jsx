import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import BooksIndexItem from './books_index_item';

class BooksIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleInfiniteScrolling = this.handleInfiniteScrolling.bind(this);
    this.state = {
      totalBooks: 0,
      continueFetching: true
    };
  }

  componentWillMount() {
    if(this.props.books.length === 0) {
      this.props.requestBooks(0);
    }
    document.addEventListener('scroll', this.handleInfiniteScrolling);
  }

  componentWillReceiveProps(nextProps) {
    const nextTotalBooks = nextProps.books.length;
    if(nextTotalBooks % 12 !== 0) {
      this.setState({ continueFetching: false});
    }
    this.setState({ totalBooks: nextTotalBooks });
  }

  handleInfiniteScrolling() {
    if(document.body.scrollHeight - 200 < document.body.scrollTop + window.innerHeight && this.state.continueFetching) {
      this.props.requestBooks(this.state.totalBooks);
    }
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
