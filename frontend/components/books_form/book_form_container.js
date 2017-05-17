import { connect } from 'react-redux';
import BookForm from './book_form';
import { createBook, clearBookErrors, receiveErrors } from '../../actions/book_actions';

const mapStateToProps = ({ errors }) => ({
  errors: errors || []
});

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
  clearErrors: errors => dispatch(clearBookErrors(errors))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookForm);
