import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import RecommendationsItem from './recommendations_item';

class Recommendations extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { books } = this.props;
    return (
      <div>
        <h2>Users who like this book also like:</h2>
        <ul className="recommendations-list">
          {books.map((book, i) => <RecommendationsItem key={i} book={book} />)}
        </ul>
      </div>
    );
  }
}

export default withRouter(Recommendations);
