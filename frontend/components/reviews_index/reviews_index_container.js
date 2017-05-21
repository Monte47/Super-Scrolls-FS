import { connect } from 'react-redux';
import ReviewsIndex from './reviews_index';
import { requestReiviews, destroyReview } from '../../actions/review_actions';
import { selectReviews } from '../../reducers/selectors';

const mapStateToProps = state => ({
  reviews: selectReviews(state)
});

const mapDispatchToProps = dispatch => ({
  requestReiviews: () => dispatch(requestReiviews()),
  deleteReview: id => dispatch(destroyReview(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsIndex);
