import { connect } from 'react-redux';
import {
  GET_COUNTRIES_PENDING,
} from '../../actions';
import Countries from './countries';

const mapStateToProps = state => ({
  countries: state.countries.data,
  loading: state.countries.loading,
  error: state.countries.error,
});

const mapDispatchToProps = dispatch => ({
  getCountries: () => dispatch({ type: GET_COUNTRIES_PENDING }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Countries);
