import { connect } from 'react-redux';
import EditBookForm from './book_edit';
import { updateBook, requestBooks, receiveErrors, clearBookErrors } from '../../actions/book_actions';
import { selectBook } from '../../reducers/selectors';

const mapStateToProps = (state, { match } ) => ({
  book: selectBook(state, match.params.id ),
  errors: state.errors || []
});

const mapDispatchToProps = dispatch => ({
  updateBook: book => dispatch(updateBook(book)),
  requestBooks: () => dispatch(requestBooks()),
  clearErrors: errors => dispatch(clearBookErrors(errors))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditBookForm);
