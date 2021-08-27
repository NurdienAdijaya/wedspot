import { combineReducers } from "redux";
import userData from "./user";
import packages from "./package";

export default combineReducers({
  userData,
  packages,
});
