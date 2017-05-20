import { connect } from 'react-redux';
import BookshelfDetail from './bookshelf_detail';
import { requestBookshelf, destroyBookshelf } from '../../actions/bookshelf_actions';
import { selectBooks } from '../../reducers/selectors';
import { deleteShelving } from '../../actions/shelvings_actions';

const mapStateToProps = ({ bookshelfDetail }) => ({
  bookshelfDetail,
  books: selectBooks(bookshelfDetail)
});

const mapDispatchToProps = dispatch => ({
  requestBookshelf: id => dispatch(requestBookshelf(id)),
  deleteBookshelf: id => dispatch(destroyBookshelf(id)),
  deleteShelving: shelving => dispatch(deleteShelving(shelving))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookshelfDetail);
