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
    if(this.props.bookDetail.liked) {
      return (
        <button id="unlike-button" onClick={this.handleUnlike}>Unlike</button>
      );
    } else {
      return (
        <button id="like-button" onClick={this.handleLike}>Like</button>
      );
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
