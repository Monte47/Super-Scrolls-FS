import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import ReviewsIndexItem from './reviews_index_item';

class ReviewsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    };
    this.handleCreateReview = this.handleCreateReview.bind(this);
  }

  componentDidMount() {
    this.props.requestReviews(this.props.match.params.bookId);
  }

  componentWillMount() {
    this.props.requestReviews(this.props.match.params.bookId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.bookId !== nextProps.match.params.bookId) {
      this.props.requestReviews(nextProps.match.params.bookId);
    }
  }

  handleCreateReview(e) {
    e.preventDefault();
    this.props.createReview({body: this.state.body, book_id: this.props.bookId });
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  renderReviewForm() {
    if (this.props.currentUser) {
      return (
        <form className="reviews-form" onSubmit={this.handleCreateReview}>
          <textarea
            id="body"
            value={this.state.body}
            placeholder="review..."
            onChange={this.update("body")}>
          </textarea>
          <button id="create-review-button">Add Review</button>
        </form>
      );
    }
  }

  render() {
    const { reviews, deleteReview, currentUser } = this.props;
    return (
      <section className="reviews-index">
        <h3>Reviews</h3>
        {this.renderReviewForm()}
        <ul>
          {reviews.map(review => <ReviewsIndexItem key={review.id} review={review} deleteReview={deleteReview} currentUser={currentUser}/>)}
        </ul>
      </section>
    );
  }

}

export default withRouter(ReviewsIndex);
