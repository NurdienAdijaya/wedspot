import { all } from "@redux-saga/core/effects";
import { watchLogin, watchLogout, watchRegister} from "./user";

export default function* rootSaga() {
  // function generator
  yield all([watchLogin(), watchRegister(), watchLogout()]);
}
