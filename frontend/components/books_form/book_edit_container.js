import { connect } from 'react-redux';
import EditBookForm from './book_edit';
import { updateBook, requestBook, receiveErrors, clearBookErrors } from '../../actions/book_actions';
import { selectBook } from '../../reducers/selectors';

const mapStateToProps = (state, { match } ) => ({
  book: state.bookDetail,
  errors: state.errors || []
});

const mapDispatchToProps = dispatch => ({
  updateBook: book => dispatch(updateBook(book)),
  requestBook: (book) => dispatch(requestBook(book)),
  clearErrors: errors => dispatch(clearBookErrors(errors))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditBookForm);
