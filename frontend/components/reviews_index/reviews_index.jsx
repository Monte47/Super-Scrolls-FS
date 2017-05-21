import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import ReviewsIndexItem from './reviews_index_item';

class ReviewsIndex extends React.Component {

  componentDidMount() {
    this.props.requestReiviews();
  }

  componentWillMount() {
    this.props.requestReiviews();
  }

  render() {
    const { reviews, deleteReview } = this.props;
    return (
      <section className="reviews-index">
        <ul>
          {reviews.map(review => <ReviewsIndexItem key={review.id} review={review} deleteReview={deleteReview} />)}
        </ul>
      </section>
    );
  }

}

export default withRouter(ReviewsIndex);
