import { connect } from 'react-redux';
import BookshelfDetail from './bookshelf_detail';
import { requestBookshelf, destroyBookshelf } from '../../actions/bookshelf_actions';
import { selectBooks } from '../../reducers/selectors';
import { destroyShelving } from '../../actions/shelvings_actions';

const mapStateToProps = (state) => ({
  bookshelfDetail: state.bookshelfDetail,
  books: selectBooks(state.bookshelfDetail)
});

const mapDispatchToProps = dispatch => ({
  requestBookshelf: id => dispatch(requestBookshelf(id)),
  deleteBookshelf: id => dispatch(destroyBookshelf(id)),
  deleteShelving: shelving => dispatch(destroyShelving(shelving))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookshelfDetail);
