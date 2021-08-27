import { all } from "@redux-saga/core/effects";
import {
  watchGetOrganizerHome,
  watchGetVenueHome,
  watchGetPackagesHome,
} from "./package";
import { watchLogin, watchRegister } from "./user";

export default function* rootSaga() {
  // function generator
  yield all([
    watchLogin(),
    watchRegister(),
    watchGetVenueHome(),
    watchGetOrganizerHome(),
    watchGetPackagesHome(),
  ]);
}
