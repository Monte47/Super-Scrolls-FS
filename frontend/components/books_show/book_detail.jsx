import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

class BookDetail extends React.Component {

  componentDidMount() {
    this.props.requestBook(this.props.match.params.bookId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.bookId !== nextProps.match.params.bookId) {
      this.props.requestBook(nextProps.match.params.bookId);
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteBook(this.props.bookDetail.id);
    this.props.history.goBack();
  }

  render() {
    const { bookDetail } = this.props;
    return (
      <section className="book-show">
        <div className="inner-show">
          <figure>
            <img src={bookDetail.image_url} alt={bookDetail.name} />
          </figure>
          <div className="book-details">
            <div className="book-detail-headers">
              <h2>{bookDetail.title}</h2>
              <h3>{bookDetail.author}</h3>
            </div>
            <div className="book-description">
              {bookDetail.description}
            </div>
          </div>
        </div>
        <button className="delete-book" onClick={this.handleDelete.bind(this)} type="button">Delete Book</button>
      </section>
    );
  }

}

export default withRouter(BookDetail);
