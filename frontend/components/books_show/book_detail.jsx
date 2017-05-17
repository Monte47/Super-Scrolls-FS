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

  render() {
    const { bookDetail } = this.props;
    return (
      <section className="book-show">
        <figure>
          <img src={bookDetail.image_url} alt={bookDetail.name} />
        </figure>
        <div className="book-details">
          <h2>{bookDetail.title}</h2>
          <h3>{bookDetail.author}</h3>
          <div className="book-description">
            {bookDetail.description}
          </div>
        </div>
      </section>
    );
  }

}

export default withRouter(BookDetail);
