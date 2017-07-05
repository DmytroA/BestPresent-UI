import { connect } from 'react-redux';
import {
  GET_COUNTRIES_PENDING,
  CHANGE_COUNTRIES_PAGE,
} from '../../actions';
import Countries from './countries';

const mapStateToProps = state => ({
  countries: state.countries.data,
  loading: state.countries.loading,
  error: state.countries.error,
  pagination: state.countries.pagination,
});

const mapDispatchToProps = dispatch => ({
  getCountries: () => dispatch({ type: GET_COUNTRIES_PENDING }),
  onChangePage: page => dispatch({ type: CHANGE_COUNTRIES_PAGE, payload: { page } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Countries);
