import { combineReducers } from "redux";
import userData from "./user";
import packages from "./package";
import vendors from "./vendor";
import search from "./search";
import vendorDetail from "./vendordetail";
import packageDetail from "./packagedetail";

export default combineReducers({
  userData,
  packages,
  vendors,
  search,
  vendorDetail,
  packageDetail,
});
