import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.renderButton = this.renderButton.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
  }

  handleUnlike(e) {
    e.preventDefault();
    this.props.deleteLike({book_id: this.props.bookDetail.id});
  }

  handleLike(e) {
    e.preventDefault();
    this.props.createLike({book_id: this.props.bookDetail.id});
  }

  renderButton() {
    if(this.props.currentUser.id) {
      if(this.props.bookDetail.liked) {
        return (
          <i className="fa fa-heart" aria-hidden="true" id="unlike-button" onClick={this.handleUnlike}></i>
        );
      } else {
        return (
          <i className="fa fa-heart-o" aria-hidden="true" id="like-button" onClick={this.handleLike}></i>
        );
      }
    }
  }

  render() {
    return (
      <div>
        {this.renderButton()}
      </div>
    );
  }
}

export default withRouter(LikeButton);
