import { connect } from 'react-redux';
import BookDetail from './book_detail';
import { requestBook, destroyBook } from '../../actions/book_actions';
import { createShelving, destroyShelving } from '../../actions/shelvings_actions';
import { requestReviews } from '../../actions/review_actions';
import { requestBookshelves } from '../../actions/bookshelf_actions';
import { selectBookshelves } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  bookDetail: state.bookDetail,
  bookshelves: selectBookshelves(state),
  currentUserId: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  requestBook: id => dispatch(requestBook(id)),
  deleteBook: id => dispatch(destroyBook(id)),
  createShelving: shelving => dispatch(createShelving(shelving)),
  destroyShelving: shelving => dispatch(destroyShelving(shelving)),
  requestReviews: book_id => dispatch(requestReviews(book_id)),
  requestBookshelves: () => dispatch(requestBookshelves())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookDetail);
