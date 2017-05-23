import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import SearchItem from './search_item';


class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchStr: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  handleSearch() {
    return e => this.setState({ searchStr: e.target.value }, (search) => {
      if(this.state.searchStr === "") {
        this.props.clearResults();
      } else {
        this.props.requestSearch(this.state.searchStr);
      }
    });
  }

  handleDebugger(e) {
    e.preventDefault();
    debugger;
  }

  clearState() {
    this.setState({searchStr: ""});
  }


  render() {
    const { searchResults, requestSearch, clearResults } = this.props;
    return(
      <div className="search-container">
        <input
          className="search-bar"
          type="text"
          placeholder="Search.."
          value={this.state.searchStr}
          onChange={this.handleSearch()}
          />
        <div className="search-results-placeholder">
          <p onClick={this.handleDebugger.bind(this)}>Type Book Title</p>
        </div>
        <ul className="search-results-container">
          {searchResults.map((searchResult, i) => <SearchItem key={i} clearState={this.clearState} searchResult={searchResult} requestSearch={requestSearch} clearResults={clearResults}/>)}
        </ul>
      </div>
    );
  }
}

export default withRouter(Search);
