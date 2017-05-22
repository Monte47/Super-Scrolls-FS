import { connect } from 'react-redux';
import BookForm from './book_form';
import { createBook, clearErrors, receiveErrors } from '../../actions/book_actions';

const mapStateToProps = ({ errors }) => ({
  errors: errors || []
});

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
  clearErrors: errors => dispatch(clearErrors(errors))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookForm);
