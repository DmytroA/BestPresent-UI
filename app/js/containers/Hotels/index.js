import { connect } from 'react-redux';
import {
  GET_HOTELS_PENDING,
} from '../../actions';
import Hotels from './hotels';

const mapStateToProps = state => ({
  hotels: state.hotels.data,
  loading: state.hotels.loading,
  error: state.hotels.error,
});

const mapDispatchToProps = dispatch => ({
  getHotels: () => dispatch({ type: GET_HOTELS_PENDING }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hotels);
