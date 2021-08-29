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
import { watchLogin, watchRegister } from "./user";
import { watchGetAllVendor } from "./vendor";

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
  ]);
}
