import { combineReducers } from "redux";
import login from "./login/login-reducer";
import admin from "./admin/adminReducer";
import adminlist from "./adminList/adminListReducer";
export default combineReducers({
    login,
    admin,
    adminlist
});
