import { connect } from 'react-redux';
import BookForm from './book_form';
import { createBook } from '../../actions/book_actions';

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookForm);
