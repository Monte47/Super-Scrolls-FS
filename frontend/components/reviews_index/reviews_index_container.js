import { connect } from 'react-redux';
import ReviewsIndex from './reviews_index';
import { requestReviews, destroyReview } from '../../actions/review_actions';
import { selectReviews } from '../../reducers/selectors';

const mapStateToProps = state => ({
  reviews: selectReviews(state)
});

const mapDispatchToProps = dispatch => ({
  requestReviews: () => dispatch(requestReviews()),
  deleteReview: id => dispatch(destroyReview(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsIndex);
