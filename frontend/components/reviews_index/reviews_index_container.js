import { connect } from 'react-redux';
import ReviewsIndex from './reviews_index';
import { requestReviews, destroyReview, createReview, updateReview } from '../../actions/review_actions';
import { selectReviews } from '../../reducers/selectors';

const mapStateToProps = state => ({
  reviews: selectReviews(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestReviews: book_id => dispatch(requestReviews(book_id)),
  deleteReview: id => dispatch(destroyReview(id)),
  createReview: review => dispatch(createReview(review)),
  updateReview: review => dispatch(updateReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsIndex);
