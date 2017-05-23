import { connect } from 'react-redux';
import Search from './search';
import { requestSearch } from '../../actions/search_actions';
import { selectSearchResults } from '../../reducers/selectors';

const mapStateToProps = state => ({
  searchResults: selectSearchResults(state)
});

const mapDispatchToProps = dispatch => ({
  requestSearch: searchStr => dispatch(requestSearch(searchStr))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
