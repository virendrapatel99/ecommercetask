import { takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_PEOPLE_START,
  GET_PEOPLE_ERROR,
  GET_PEOPLE_SUCCESS,

  GET_PRODUCT_START,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_SUCCESS
} from 'actions/people';
import api from 'api';

// -------- Get people

function createGetPeople(isServer = false) {
  return function* (options) { // eslint-disable-line consistent-return
    try {
      const data = yield call(() => api.getPeople(options.id));
      const action = { type: GET_PEOPLE_SUCCESS, data };
      yield put(action);
    } catch (error) {
      const action = { type: GET_PEOPLE_ERROR, error };
      yield put(action);
    }
  };
}

function createGetProduct() {
  return function* (options) {

    try {
      const data = yield call(() => api.fetProduxts(options.data));
      const action = { type: GET_PRODUCT_SUCCESS, data };
      yield put(action);
    } catch (error) {
      const action = { type: GET_PRODUCT_ERROR, error };
      yield put(action);
    }
  };
}

export function* getPeopleWatcher() {
  yield takeLatest(GET_PEOPLE_START, createGetPeople());
}

export function* getProductWatcher() {
  yield takeLatest(GET_PRODUCT_START, createGetProduct());
}


export default [
  getPeopleWatcher(),
  getProductWatcher()
];
