import { connect } from 'react-redux';
import BookshelfDetail from './bookshelf_detail';
import { requestBookshelf, destroyBookshelf } from '../../actions/bookshelf_actions';
import { selectBooks } from '../../reducers/selectors';

const mapStateToProps = ({ bookshelfDetail }) => ({
  bookshelfDetail,
  books: selectBooks(bookshelfDetail)
});

const mapDispatchToProps = dispatch => ({
  requestBookshelf: id => dispatch(requestBookshelf(id)),
  deleteBookshelf: id => dispatch(destroyBookshelf(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookshelfDetail);
