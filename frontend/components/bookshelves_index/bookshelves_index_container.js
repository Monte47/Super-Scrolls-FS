import { connect } from 'react-redux';
import BookshelvesIndex from './bookshelves_index';
import { requestBookshelves, createBookshelf, destroyBookshelf } from '../../actions/bookshelf_actions';
import { selectBookshelves } from '../../reducers/selectors';
import { clearErrors } from '../../actions/book_actions';

const mapStateToProps = (state) => ({
  bookshelves: selectBookshelves(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  requestBookshelves: () => dispatch(requestBookshelves()),
  createBookshelf: bookshelf => dispatch(createBookshelf(bookshelf)),
  deleteBookshelf: id => dispatch(destroyBookshelf(id)),
  clearErrors: errors => dispatch(clearErrors(errors))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookshelvesIndex);
