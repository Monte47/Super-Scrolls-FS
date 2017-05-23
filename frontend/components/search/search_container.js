import { connect } from 'react-redux';
import Search from './search';
import { requestSearch, clearSearchResults } from '../../actions/search_actions';
import { selectSearchResults } from '../../reducers/selectors';

const mapStateToProps = state => ({
  searchResults: selectSearchResults(state)
});

const mapDispatchToProps = dispatch => ({
  requestSearch: searchStr => dispatch(requestSearch(searchStr)),
  clearResults: () => dispatch(clearSearchResults())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
