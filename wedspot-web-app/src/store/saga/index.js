import { all } from "@redux-saga/core/effects";
import {
  watchGetOrganizerHome,
  watchGetVenueHome,
  watchGetPackagesHome,
  watchGetVenueSearch,
  watchGetOrganizerSearch,
  watchGetPackagesSearch,
} from "./package";
import { watchGetQuotationInbox, watchGetQuotationSent } from "./quotation";
import { watchLogin, watchRegister, watchGetUser } from "./user";

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
    watchGetQuotationInbox(),
    watchGetQuotationSent(),
  ]);
}
