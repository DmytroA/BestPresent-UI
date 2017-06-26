import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import {
  GET_HOTELS_PENDING,
  GET_HOTEL_PENDING,
  GET_HOTELS_FAIL,
  GET_HOTEL_FAIL,
  GET_HOTEL_SUCCESS,
  GET_HOTELS_SUCCESS,
} from '../actions';
import { api } from '../services';

export function* getHotels() {
  try {
    const hotels = yield call(api.getHotels);
    yield put({ type: GET_HOTELS_SUCCESS, payload: hotels.data });
  } catch (error) {
    yield put({ type: GET_HOTELS_FAIL, error });
  }
}

export function* getHotel(action) {
  try {
    const hotel = yield call(api.getHotel, action.payload);
    yield put({ type: GET_HOTEL_SUCCESS, payload: hotel.data });
  } catch (error) {
    yield put({ type: GET_HOTEL_FAIL, error });
  }
}

export default function () {
  return [
    takeEvery(GET_HOTELS_PENDING, getHotels),
    takeEvery(GET_HOTEL_PENDING, getHotel),
  ];
}
