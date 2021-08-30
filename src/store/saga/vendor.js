import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

import { BASE_URL } from "../const/server";
import * as types from "../const/types";

function* getAllVendor(actions) {
  const { error, location, category, minPax, maxPax, minPrice, maxPrice } =
    actions;
  try {
    const res = yield axios.get(
      `${BASE_URL}/vendors?location=${location}&type=${category}&min_capacity=${minPax}&max_capacity=${maxPax}&min_price=${minPrice}&max_price=${maxPrice}`
    );
    yield put({
      type: types.GET_VENDOR_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: types.GET_VENDOR_FAIL,
      error: error,
    });
  }
}

export function* watchGetAllVendor() {
  yield takeEvery(types.GET_VENDOR_BEGIN, getAllVendor);
}
