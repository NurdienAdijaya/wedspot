import { all } from "@redux-saga/core/effects";
import {
  watchGetOrganizerHome,
  watchGetVenueHome,
  watchGetPackagesHome,
  watchGetVenueSearch,
  watchGetOrganizerSearch,
  watchGetPackageSearch,
} from "./package";
import { watchGetQuotationInbox, watchGetQuotationSent } from "./quotation";
import { watchGetSearch } from "./search";
import { watchGetAllVendor } from "./vendor";
import { watchLogin, watchRegister, watchGetUser } from "./user";
import { watchPackageId, watchVendorId } from "./detail";
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
    watchPackageId(),
    watchVendorId(),
    watchGetQuotationInbox(),
    watchGetQuotationSent(),
    watchGetLocation(),
  ]);
}
