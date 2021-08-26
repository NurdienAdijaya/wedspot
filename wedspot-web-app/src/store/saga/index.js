import { all } from "@redux-saga/core/effects";
import { watchLogin, watchRegister} from "./user";

export default function* rootSaga() {
  // function generator
  yield all([watchLogin(), watchRegister() ]);
}
