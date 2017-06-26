import {
  GET_HOTELS_PENDING,
  GET_HOTEL_PENDING,
  GET_HOTELS_SUCCESS,
  GET_HOTEL_SUCCESS,
  GET_HOTEL_FAIL,
  GET_HOTELS_FAIL,
} from '../actions';

export const initialState = {
  data: [],
  currentHotel: {},
  error: null,
  loading: false,
  pagination: {},
};

export default function hotels(state = initialState, action) {
  switch (action.type) {
    case GET_HOTELS_PENDING:
    case GET_HOTEL_PENDING:
      return {
        ...state,
        error: null,
        loading: true,
        pagination: {},
      };
    case GET_HOTELS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data ? action.payload.data : action.payload,
        pagination: action.payload.Pagination,
      };
    case GET_HOTEL_SUCCESS:
      return {
        ...state,
        loading: false,
        currentHotel: action.payload.data ? action.payload.data : action.payload,
      };
    case GET_HOTELS_FAIL:
    case GET_HOTEL_FAIL:
      return {
        ...state,
        error: action.error.message,
        loading: false,
      };
    default:
      return state;
  }
}
