import { connect } from 'react-redux';
import BooksIndex from './books_index';
import { requestBooks } from '../../actions/book_actions';
import { selectBooks } from '../../reducers/selectors';

const mapStateToProps = state => ({
  books: selectBooks(state)
});

const mapDispatchToProps = dispatch => ({
  requestBooks: () => dispatch(requestBooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksIndex);
