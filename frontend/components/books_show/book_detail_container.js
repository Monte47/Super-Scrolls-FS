import { connect } from 'react-redux';
import BookDetail from './book_detail';
import { requestBook, destroyBook } from '../../actions/book_actions';

const mapStateToProps = ({ bookDetail }) => ({
  bookDetail
});

const mapDispatchToProps = dispatch => ({
  requestBook: id => dispatch(requestBook(id)),
  deleteBook: id => dispatch(destroyBook(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookDetail);
