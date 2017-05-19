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
    return (
      <section className="bookshelf-detail">
        <h2 onClick={this.handleDebugger.bind(this)}>{bookshelfDetail.name}</h2>
        <ul className="bookshelf-books-list">
          <li className="bookshelf-list-header">
            <h3>Title</h3>
            <h3>Author</h3>
          </li>
          {books.map(book => <BookshelfDetailItem key={book.id} book={book} />)}
        </ul>
      </section>

    );
  }

}

export default withRouter(BookshelfDetail);
