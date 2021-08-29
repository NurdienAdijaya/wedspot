import { combineReducers } from "redux";
import userData from "./user";
import packages from "./package";
import quotation from "./quotation";
import vendorDetail from "./vendordetail";
import packageDetail from "./packagedetail";

export default combineReducers({
  userData,
  packages,
  quotation,
  vendorDetail,
  packageDetail,
});
