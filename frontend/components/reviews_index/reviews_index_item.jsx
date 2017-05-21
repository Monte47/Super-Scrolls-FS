import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

class ReviewsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.renderDelete = this.renderDelete.bind(this);
  }


  handleDelete(e) {
    e.preventDefault();
    this.props.deleteReview(this.props.review.id);
  }

  renderDelete() {
    if(this.props.currentUser.id === this.props.review.user_id) {
      return (
        <i id="delete-review-button" className="fa fa-times fa-5" onClick={this.handleDelete.bind(this)}></i>
      );
    }
  }

  render() {
    const { review, deleteReview } = this.props;
    return (
      <li className="review-index-item">
        <h3 className="review-author">{review.username} - </h3>
        <p className="review-body">{review.body}</p>
        {this.renderDelete()}
      </li>
    );
  }
}

export default withRouter(ReviewsIndexItem);
