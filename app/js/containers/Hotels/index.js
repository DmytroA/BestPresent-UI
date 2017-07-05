import { connect } from 'react-redux';
import {
  GET_HOTELS_PENDING,
  CHANGE_HOTELS_PAGE,
} from '../../actions';
import Hotels from './hotels';

const mapStateToProps = state => ({
  hotels: state.hotels.data,
  loading: state.hotels.loading,
  error: state.hotels.error,
  pagination: state.hotels.pagination,
});

const mapDispatchToProps = dispatch => ({
  getHotels: () => dispatch({ type: GET_HOTELS_PENDING }),
  onChangePage: page => dispatch({ type: CHANGE_HOTELS_PAGE, payload: { page } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hotels);
