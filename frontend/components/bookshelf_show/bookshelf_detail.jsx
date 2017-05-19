import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

class BookshelfDetail extends React.Component {

  componentDidMount() {
    this.props.requestBookshelf(this.props.match.params.bookshelfId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.bookshelfId !== nextProps.match.params.bookshelfId) {
      this.props.requestBookshelf(nextProps.match.params.bookshelfId);
    }
  }

  render() {
    return (
      <h2>BOOKSHELF DETAIL</h2>
    );
  }

}

export default withRouter(BookshelfDetail);
