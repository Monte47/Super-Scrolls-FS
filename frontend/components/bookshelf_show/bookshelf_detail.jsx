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

  render() {
    const { bookshelfDetail, books, deleteShelving } = this.props;
    if (books.length > 0) {
      return (
        <section className="bookshelf-detail">
          <div className="bookshelf-list-header">
            <h3>Title</h3>
            <h3>Author</h3>
          </div>
          <ul className="bookshelf-books-list">
            {books.map(book => <BookshelfDetailItem key={book.id} book={book} bookshelfId={bookshelfDetail.id} deleteShelving={deleteShelving} />)}
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
          <img src="http://res.cloudinary.com/dbc0rv0hu/image/upload/v1495326388/cobwebs_vjq9xl.png" />
        </section>
      );
    }
  }

}

export default withRouter(BookshelfDetail);
