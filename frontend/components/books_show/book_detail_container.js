import { connect } from 'react-redux';
import BookDetail from './book_detail';
import { requestBook, destroyBook } from '../../actions/book_actions';
import { createShelving } from '../../actions/shelvings_actions';
import { requestReviews } from '../../actions/review_actions';

const mapStateToProps = (state) => ({
  bookDetail: state.bookDetail,
  bookshelves: state.session.bookshelves
});

const mapDispatchToProps = dispatch => ({
  requestBook: id => dispatch(requestBook(id)),
  deleteBook: id => dispatch(destroyBook(id)),
  createShelving: shelving => dispatch(createShelving(shelving)),
  requestReviews: book_id => dispatch(requestReviews(book_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookDetail);
