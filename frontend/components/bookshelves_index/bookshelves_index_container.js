import { connect } from 'react-redux';
import BookshelvesIndex from './bookshelves_index';
import { requestBookshelves, createBookshelf, destroyBookshelf } from '../../actions/bookshelf_actions';
import { selectBookshelves } from '../../reducers/selectors';

const mapStateToProps = state => ({
  bookshelves: selectBookshelves(state)
});

const mapDispatchToProps = dispatch => ({
  requestBookshelves: () => dispatch(requestBookshelves()),
  createBookshelf: bookshelf => dispatch(createBookshelf(bookshelf)),
  deleteBookshelf: id => dispatch(destroyBookshelf(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookshelvesIndex);
