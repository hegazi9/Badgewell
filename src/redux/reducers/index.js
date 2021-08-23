import { combineReducers } from "redux";
import userState from "./user";
import contactState from "./contacts";

export default combineReducers({
  userState,
  contactState
});
