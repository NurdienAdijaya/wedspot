import { combineReducers } from "redux";
import userData from "./user";
import packages from "./package";
import vendorDetail from "./vendordetail";
import packageDetail from "./packagedetail";

export default combineReducers({
  userData,
  packages,
  vendorDetail,
  packageDetail,
});
