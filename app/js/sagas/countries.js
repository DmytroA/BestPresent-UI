import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import {
  GET_COUNTRIES_PENDING,
  GET_COUNTRY_PENDING,
  GET_COUNTRIES_FAIL,
  GET_COUNTRY_FAIL,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRY_SUCCESS,
  ADD_COUNTRY_PENDING,
  ADD_COUNTRY_FAIL,
  ADD_COUNTRY_SUCCESS,
  CHANGE_COUNTRIES_PAGE,
} from '../actions';
import { api } from '../services';

export function* getCountries(action) {
  try {
    const countries = yield call(api.getCountries, action.payload);
    yield put({ type: GET_COUNTRIES_SUCCESS, payload: countries.data });
  } catch (error) {
    yield put({ type: GET_COUNTRIES_FAIL, error });
  }
}

export function* getCountry(action) {
  try {
    const country = yield call(api.getCountry, action.payload);
    yield put({ type: GET_COUNTRY_SUCCESS, payload: country.data });
  } catch (error) {
    yield put({ type: GET_COUNTRY_FAIL, error });
  }
}

export function* addCountry(action) {
  try {
    yield call(api.addCountry, action.payload);
    yield put({ type: ADD_COUNTRY_SUCCESS });
  } catch (error) {
    yield put({ type: ADD_COUNTRY_FAIL, error });
  }
}

function* countryPageChanged(action) {
  yield put({ type: GET_COUNTRIES_PENDING, payload: { page: action.payload.page } })
}

export default function () {
  return [
    takeEvery(GET_COUNTRIES_PENDING, getCountries),
    takeEvery(GET_COUNTRY_PENDING, getCountry),
    takeEvery(ADD_COUNTRY_PENDING, addCountry),
    takeEvery(CHANGE_COUNTRIES_PAGE, countryPageChanged)
  ];
}
