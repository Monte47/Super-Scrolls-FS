import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import ReviewsIndexItem from './reviews_index_item';

class ReviewsIndex extends React.Component {

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

  handleDebugger(e) {
    e.preventDefault();
    debugger;
  }

  render() {
    const { reviews, deleteReview } = this.props;
    return (
      <section className="reviews-index">
        <h3 onClick={this.handleDebugger.bind(this)}>Reviews</h3>
        <ul>
          {reviews.map(review => <ReviewsIndexItem key={review.id} review={review} deleteReview={deleteReview} />)}
        </ul>
      </section>
    );
  }

}

export default withRouter(ReviewsIndex);
