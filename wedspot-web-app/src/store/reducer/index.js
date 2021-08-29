import { combineReducers } from "redux";
import userData from "./user";
import packages from "./package";
import vendors from "./vendor";
import search from "./search";

export default combineReducers({
  userData,
  packages,
  vendors,
  search,
});
