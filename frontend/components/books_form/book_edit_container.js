import { connect } from 'react-redux';
import EditBookForm from './book_edit';
import { updateBook, requestBooks } from '../../actions/book_actions';
import { selectBook } from '../../reducers/selectors';

const mapStateToProps = (state, { match } ) => ({
  book: selectBook(state, match.params.id )
});

const mapDispatchToProps = dispatch => ({
  updateBook: book => dispatch(updateBook(book)),
  requestBooks: () => dispatch(requestBooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditBookForm);
