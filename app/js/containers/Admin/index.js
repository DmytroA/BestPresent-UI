import { connect } from 'react-redux';
import {
  ADD_COUNTRY_PENDING,
} from '../../actions';
import AddCountry from './AddCountry';

const mapStateToProps = state => ({
  loading: state.countries.loading,
});

const mapDispatchToProps = dispatch => ({
  onSubmitChanges: (payload) => dispatch({ type: ADD_COUNTRY_PENDING, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCountry);
