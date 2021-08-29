import { all } from "@redux-saga/core/effects";
import {
  watchGetOrganizerHome,
  watchGetVenueHome,
  watchGetPackagesHome,
  watchGetVenueSearch,
  watchGetOrganizerSearch,
  watchGetPackageSearch,
} from "./package";
import { watchGetSearch } from "./search";
import { watchGetAllVendor } from "./vendor";
import { watchLogin, watchRegister, watchGetUser } from "./user";
import { watchGetLocation } from "./config";

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
    watchGetPackageSearch(),
    watchGetAllVendor(),
    watchGetSearch(),
    watchGetUser(),
    watchGetLocation(),
  ]);
}
