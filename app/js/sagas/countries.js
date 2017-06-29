import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import {
  GET_COUNTRIES_PENDING,
  GET_COUNTRY_PENDING,
  GET_COUNTRIES_FAIL,
  GET_COUNTRY_FAIL,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRY_SUCCESS,
} from '../actions';
import { api } from '../services';

export function* getCountries() {
  try {
    const countries = yield call(api.getCountries);
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

export default function () {
  return [
    takeEvery(GET_COUNTRIES_PENDING, getCountries),
    takeEvery(GET_COUNTRY_PENDING, getCountry),
  ];
}
