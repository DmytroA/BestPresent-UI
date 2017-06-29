import {
  GET_COUNTRIES_PENDING,
  GET_COUNTRY_PENDING,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRY_SUCCESS,
  GET_COUNTRIES_FAIL,
  GET_COUNTRY_FAIL,
} from '../actions';

export const initialState = {
  data: [],
  selectedCountry: {},
  error: null,
  loading: false,
  pagination: {},
};

export default function countries(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES_PENDING:
    case GET_COUNTRY_PENDING:
      return {
        ...state,
        error: null,
        loading: true,
        pagination: {},
      };
    case GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data ? action.payload.data : action.payload,
        pagination: action.payload.Pagination,
      };
    case GET_COUNTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedCountry: action.payload.data ? action.payload.data : action.payload,
      };
    case GET_COUNTRIES_FAIL:
    case GET_COUNTRY_FAIL:
      return {
        ...state,
        error: action.error.message,
        loading: false,
      };
    default:
      return state;
  }
}
