import { connect } from 'react-redux';
import {
  GET_HOTEL_PENDING,
} from '../../actions';
import Hotel from '../../components/Hotel/Hotel';

const mapStateToProps = state => ({
  hotel: state.hotels.currentHotel,
  loading: state.hotels.loading,
  error: state.hotels.error,
});

const mapDispatchToProps = dispatch => ({
  getHotel: (payload) => dispatch({ type: GET_HOTEL_PENDING, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hotel);
