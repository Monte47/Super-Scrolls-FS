import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

class ReviewsIndexItem extends React.Component {


  handleDelete(e) {
    e.preventDefault();
    this.props.deleteReview(this.props.review.id);
  }

  render() {
    const { review, deleteReview } = this.props;
    return (
      <li className="review-index-item">
        <p className="review-body">{review.body}</p>
        <i id="delete-review-button" className="fa fa-times fa-5" onClick={this.handleDelete.bind(this)}></i>
      </li>
    );
  }
}

export default withRouter(ReviewsIndexItem);
