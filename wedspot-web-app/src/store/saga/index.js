import { all } from "@redux-saga/core/effects";
import {
  watchGetOrganizerHome,
  watchGetVenueHome,
  watchGetPackagesHome,
  watchGetVenueSearch,
  watchGetOrganizerSearch,
  watchGetPackagesSearch,
} from "./package";
import { watchLogin, watchRegister, watchGetUser } from "./user";
import { watchPackageId, watchVendorId } from "./detail";

export default function* rootSaga() {
  // function generator
  yield all([
    watchLogin(),
    watchRegister(),
    watchGetVenueHome(),
    watchGetOrganizerHome(),
    watchGetPackagesHome(),
    watchGetVenueSearch(),
    watchGetOrganizerSearch(),
    watchGetPackagesSearch(),
    watchGetUser(),
    watchPackageId(),
    watchVendorId(),
  ]);
}
