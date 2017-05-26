import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

class RecommendationsItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const { book } = this.props;
    return (
      <h2>{book[0].title}</h2>
    );
  }
}
export default withRouter(RecommendationsItem);
