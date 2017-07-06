import { connect } from 'react-redux';
import {
  ADD_COUNTRY_PENDING,
  EDIT_COUNTRY_PENDING,
} from '../../actions';
import AddCountry from './AddCountry';

const mapStateToProps = state => ({
  loading: state.countries.loading,
  id: state.countries.selectedCountry.Id,
  name: state.countries.selectedCountry.Name,
  description: state.countries.selectedCountry.Description,
  imageData: state.countries.selectedCountry.ImageData,
});

const mapDispatchToProps = dispatch => ({
  onAddCountry: (payload) => dispatch({ type: ADD_COUNTRY_PENDING, payload }),
  onEditCountry: (id, payload) => dispatch({ type: EDIT_COUNTRY_PENDING, payload, id }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCountry);
