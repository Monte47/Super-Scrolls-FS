import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

class ReviewsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.renderDelete = this.renderDelete.bind(this);
    this.renderEdit = this.renderEdit.bind(this);
    this.handleUpdateReview = this.handleUpdateReview.bind(this);
    this.setState = this.setState.bind(this);
    this.flipEdit = this.flipEdit.bind(this);
    this.hoverClass = this.hoverClass.bind(this);
    this.state = {
      body: "",
      id: parseInt(this.props.review.id),
      renderEdit: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.review) {
      this.setState({
        body: nextProps.review.body
      });
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteReview(this.props.review.id)
    .then(() => this.props.clearErrors());
  }

  renderDelete() {
    if(this.props.currentUser && this.props.currentUser.id === this.props.review.user_id) {
      return (
        <i id="delete-review-button" className="fa fa-times fa-5" onClick={this.handleDelete.bind(this)}></i>
      );
    }
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value});
  }

  handleUpdateReview(e) {
    e.preventDefault();
    this.flipEdit();
    this.props.updateReview({id: this.state.id, body: this.state.body, book_id: parseInt(this.props.match.params.bookId)})
    .then(() => this.props.clearErrors());
  }



  renderEdit() {
    if (this.state.renderEdit && this.props.currentUser.id === this.props.review.user_id) {
      return (
        <form id="reviews-edit-form" className="hi" onSubmit={this.handleUpdateReview}>
        <textarea
          id="body"
          value={this.state.body}
          placeholder="review..."
          onChange={this.update("body")}>
        </textarea>
        <button id="edit-review-button">Update Review</button>
      </form>
      );
    }
  }

  flipEdit() {
    if(this.props.currentUser.id === this.props.review.user_id) {
      this.setState({renderEdit: this.state.renderEdit === true ? false : true});
    }
  }

  hoverClass() {
    if(this.props.currentUser && this.props.currentUser.id === this.props.review.user_id) {
      return "review-body current-user";
    } else {
      return "review-body";
    }
  }

  renderReview() {
    const { review, deleteReview } = this.props;
    if(!this.state.renderEdit) {
      return (
        <div className="review-details">
          <h3 className="review-author" onClick={this.flipEdit}>{review.username} - </h3>
          <p className={this.hoverClass()} onClick={this.flipEdit}>{review.body}</p>
          {this.renderDelete()}
        </div>
      );
    }
  }



  render() {
    return (
      <li className="review-index-item">
        {this.renderEdit()}
        {this.renderReview()}
      </li>
    );
  }
}

export default withRouter(ReviewsIndexItem);
