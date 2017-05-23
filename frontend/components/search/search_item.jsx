import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

class SearchItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handleRedirect(e) {
    e.preventDefault();
    this.props.history.push(`/books/${this.props.searchResult.id}`);
    this.props.clearResults();
    this.props.clearState();
  }

  render() {
    const book = this.props.searchResult;
    return (
      <li className="search-result-item" onClick={this.handleRedirect}>
        {book.title}
      </li>
    );
  }

}

export default withRouter(SearchItem);
