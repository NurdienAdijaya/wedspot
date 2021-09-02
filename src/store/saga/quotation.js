import axios from "axios";
import { BASE_URL } from "../const/server";
import { put, takeEvery } from "@redux-saga/core/effects";
import * as types from "../const/types";

const token = localStorage.getItem("token");

function* getQuotationInbox() {
  console.log(`Bearer ${token}`);
  try {
    const res = yield axios.get(`${BASE_URL}/quotations/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield put({
      type: types.GET_QUOTATION_INBOX_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    yield put({
      type: types.GET_QUOTATION_INBOX_FAIL,
    });
  }
}

function* getQuotationSent() {
  console.log(`Bearer ${token}`);
  try {
    const res = yield axios.get(`${BASE_URL}/request/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield put({
      type: types.GET_QUOTATION_SENT_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    yield put({
      type: types.GET_QUOTATION_SENT_FAIL,
    });
  }
}

export function* watchGetQuotationInbox() {
  yield takeEvery(types.GET_QUOTATION_INBOX_BEGIN, getQuotationInbox);
}

export function* watchGetQuotationSent() {
  yield takeEvery(types.GET_QUOTATION_SENT_BEGIN, getQuotationSent);
}
