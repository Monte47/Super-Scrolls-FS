import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';


class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchStr: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    return e => this.setState({ searchStr: e.target.value }, (search) => this.props.requestSearch(this.state.searchStr));
  }


  render() {
    return(
      <div className="search-container">
        <input
          type="text"
          placeholder="Search.."
          value={this.state.searchStr}
          onChange={this.handleSearch()}
          />
        <div className="search-results-container">
          
        </div>
      </div>
    );
  }
}

export default withRouter(Search);
