import axios from "axios";
import * as types from "../const/types";
import { BASE_URL } from "../const/server";
import { put, takeEvery } from "redux-saga/effects";

function* userLogin(action) {
  const { user_email, user_password } = action;
  try {
    const res = yield axios.post(`${BASE_URL}/user/login`, { user_email, user_password });
    yield localStorage.setItem("token", JSON.stringify(res));
    yield put({
      type: types.LOGIN_SUCCESS,
      payload: res.data.current_user,
    });
  } catch (errors) {
    console.log(errors)
    yield put({
      type: types.LOGIN_FAIL,
      payload: errors,
    });
  }
}

function* userRegister(action) {
  const { user_email, user_password } = action;
  try {
    const res = yield axios.post(`${BASE_URL}/user/register`, {
      user_email,
      user_password,
    });
    yield put({
      type: types.REGISTER_SUCCESS,
      payload: res.data.current_user,
    });
  } catch (error) {
    console.log(error)
    yield put({
      type: types.REGISTER_FAIL,
      payload: error,
    });
  }
}

function* logout() {
  yield put({
    type: types.LOGOUT,
  });
}



export function* watchLogin() {
  yield takeEvery(types.LOGIN_PENDING, userLogin);
}

export function* watchRegister() {
  yield takeEvery(types.REGISTER_PENDING, userRegister);
}

export function* watchLogout() {
  yield takeEvery(types.LOGOUT, logout);
}
