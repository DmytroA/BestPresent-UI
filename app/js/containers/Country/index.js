import { connect } from 'react-redux';
import {
  GET_COUNTRY_PENDING,
} from '../../actions';
import Country from './country';

const mapStateToProps = state => ({
  country: state.countries.selectedCountry,
  loading: state.countries.loading,
  error: state.countries.error,
});

const mapDispatchToProps = dispatch => ({
  getCountry: (payload) => dispatch({ type: GET_COUNTRY_PENDING, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Country);
