import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

class RecommendationsItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const { book } = this.props;
    return (
      <li className="recommendations-list-item">
        <Link to={`/books/${book[0].id}`}>
          <h2 id="recommendations-item-title">{book[0].title}</h2>
          <img id="recommendations-item-image" src={book[0].image_url} alt={book[0].title} />
        </Link>
      </li>
    );
  }
}
export default withRouter(RecommendationsItem);
