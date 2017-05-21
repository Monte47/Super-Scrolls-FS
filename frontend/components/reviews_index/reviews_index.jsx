import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import ReviewsIndexItem from './reviews_index_item';

class ReviewsIndex extends React.Component {

  componentDidMount() {
    this.props.requestReviews();
  }

  render() {
    const { reviews, deleteReview } = this.props;
    return (
      <section className="reviews-index">
        <h3>Reviews</h3>
        <ul>
          {reviews.map(review => <ReviewsIndexItem key={review.id} review={review} deleteReview={deleteReview} />)}
        </ul>
      </section>
    );
  }

}

export default withRouter(ReviewsIndex);
