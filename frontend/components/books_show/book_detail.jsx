import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import ReviewsIndexContainer from '../reviews_index/reviews_index_container';
import LikeButton from './like_button';

class BookDetail extends React.Component {
  constructor(props) {
    super(props);
    this.renderBookshelves = this.renderBookshelves.bind(this);
    this.handleCreateShelving = this.handleCreateShelving.bind(this);
    this.update = this.update.bind(this);
    this.renderShelves = this.renderShelves.bind(this);
    this.handleDeleteShelving = this.handleDeleteShelving.bind(this);
    this.bookshelfLink = this.bookshelfLink.bind(this);
    this.state = {
      book_id: 0,
      bookshelf_id: 0
    };
  }

  componentWillMount() {
    this.props.requestBook(this.props.match.params.bookId);
    this.props.requestReviews(this.props.match.params.bookId);
    if(this.props.currentUser.id) {
      this.props.requestBookshelves();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.bookId !== nextProps.match.params.bookId) {
      this.props.requestBook(nextProps.match.params.bookId);
      this.props.requestReviews(nextProps.match.params.bookId);
      this.props.requestBookshelves();
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

  handleDeleteShelving(shelf) {
    return e => {
      e.preventDefault();
      this.props.destroyShelving({book_id: this.props.bookDetail.id, bookshelf_id: shelf.id})
      .then(() => this.props.requestBook(this.props.match.params.bookId));
    };
  }

  renderShelves(shelves = []) {
    const userShelves = shelves.filter( (shelf) => shelf.user_id === this.props.currentUser.id );
    return (
      <ul className="shelvings-display">
        {userShelves.map((shelf, i) =>
          <li className="shelving-display" key={i}>
            <span id="shelving-display" onClick={this.bookshelfLink(shelf)}>
              {shelf.name}
            </span>
            <i id="delete-shelving-book-show" className="fa fa-times fa-5" onClick={this.handleDeleteShelving(shelf)}></i>
          </li>)}
      </ul>
    );
  }

  bookshelfLink(shelf) {
    return e => this.props.history.push(`/bookshelves/${shelf.id}`);
  }

  renderBookshelves() {
    let { bookDetail } = this.props;
    const bookshelves = this.props.bookshelves;
    if(this.props.currentUser.id) {
      return (
        <section className="book-detail-shelves-container">
          <form className="book-show-bookshelf-form" onSubmit={this.handleCreateShelving}>
            <select onChange={this.update("bookshelf_id")} defaultValue="Select a bookshelf...">
              <option defaultValue disabled>Select a bookshelf...</option>
              {bookshelves.map(bookshelf => <option key={bookshelf.id} value={bookshelf.id}>{bookshelf.name}</option>)}
            </select>
            <button id="show-add-to-bookshelf-button">Add to Shelf</button>
          </form>
          <h3>This books is curently shelved on:</h3>
          {this.renderShelves(bookDetail.bookshelves)}
        </section>
      );
    }
  }

  render() {
    const { bookDetail, createLike, deleteLike } = this.props;
    return (
      <section className="book-show">
        <div className="inner-show">
          <figure>
            <img src={bookDetail.image_url} alt={bookDetail.name} />
            <h3>{bookDetail.likes.length} likes</h3>
            <LikeButton bookDetail={bookDetail} createLike={createLike} deleteLike={deleteLike}/>
          </figure>
          <div className="right-book-detail">
            <div className="book-details">
              {this.renderBookshelves()}
              <div className="book-detail-headers">
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
          <ReviewsIndexContainer bookId={bookDetail.id}/>
        </section>
      </section>
    );
  }

}

export default withRouter(BookDetail);
