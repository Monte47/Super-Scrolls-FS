import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import BookshelfDetailItem from './bookshelf_detail_item';

class BookshelfDetail extends React.Component {

  componentDidMount() {
    this.props.requestBookshelf(this.props.match.params.bookshelfId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.bookshelfId !== nextProps.match.params.bookshelfId) {
      this.props.requestBookshelf(nextProps.match.params.bookshelfId);
    }
  }

  handleDebugger(e) {
    e.preventDefault();
    debugger;
  }

  render() {
    const { bookshelfDetail, books } = this.props;
    if (books) {
      return (
        <section className="bookshelf-detail">
          <div className="bookshelf-list-header">
            <h3>Title</h3>
            <h3>Author</h3>
          </div>
          <ul className="bookshelf-books-list">
            {books.map(book => <BookshelfDetailItem key={book.id} book={book} />)}
          </ul>
        </section>

      );
    } else {
      return (
        <section className="bookshelf-detail">
          <div className="bookshelf-list-header">
            <h3>Title</h3>
            <h3>Author</h3>
          </div>
        </section>
      );
    }
  }

}

export default withRouter(BookshelfDetail);
