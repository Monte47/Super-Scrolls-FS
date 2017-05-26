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
        <h2>{book[0].title}</h2>
        <img id="recommendations-item-image" src={book[0].image_url} alt={book[0].title} />
      </li>
    );
  }
}
export default withRouter(RecommendationsItem);
