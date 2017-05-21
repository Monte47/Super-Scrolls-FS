import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import ReviewsIndexContainer from '../reviews_index/reviews_index_container';

class BookDetail extends React.Component {
  constructor(props) {
    super(props);
    this.renderBookshelves = this.renderBookshelves.bind(this);
    this.handleCreateShelving = this.handleCreateShelving.bind(this);
    this.update = this.update.bind(this);
    this.state = {
      book_id: 0,
      bookshelf_id: 0
    };
  }

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
    this.props.deleteBook(this.props.bookDetail.id).then(() => this.props.history.push("/"));
  }

  handleCreateShelving(e) {
    e.preventDefault();
    this.setState({book_id: this.props.bookDetail.id}, function() {
      this.props.createShelving(this.state);
    });
  }

  update(property) {
    return e => {
      e.preventDefault();
      this.setState({ [property]: parseInt(e.target.value)});
    };

  }

  renderBookshelves() {
    const { bookshelves } = this.props;
    if(bookshelves.length > 0) {
      return (
        <form className="book-show-bookshelf-form" onSubmit={this.handleCreateShelving}>
          <select onChange={this.update("bookshelf_id")} defaultValue="Bookshelf">
            <option defaultValue disabled>Bookshelf</option>
            {bookshelves.map(bookshelf => <option key={bookshelf.id} value={bookshelf.id}>{bookshelf.name}</option>)}
          </select>
          <button id="show-add-to-bookshelf-button">Add to Shelf</button>
        </form>
      );
    } else {
      return (
        <div></div>
      );
    }
  }

  render() {
    const { bookDetail } = this.props;
    return (
      <section className="book-show">
        <div className="inner-show">
          <figure>
            <img src={bookDetail.image_url} alt={bookDetail.name} />
          </figure>
          <div className="right-book-detail">
            <div className="book-details">
              <div className="book-detail-headers">
                {this.renderBookshelves()}
                <h2>{bookDetail.title}</h2>
                <h3>{bookDetail.author}</h3>
              </div>
              <div className="book-description">
                {bookDetail.description}
              </div>
            </div>
            <div className="detail-buttons">
              <Link to={`/books/${bookDetail.id}/edit`} >
                <button id="edit-book" type="button">Edit Book</button>
              </Link>
              <button id="delete-book" onClick={this.handleDelete.bind(this)} type="button">Delete Book</button>
            </div>
          </div>
        </div>
        <section className="reviews-section">
          <ReviewsIndexContainer />
        </section>
      </section>
    );
  }

}

export default withRouter(BookDetail);
