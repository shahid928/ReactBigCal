import { combineReducers } from "redux";
import { blogListReducer } from "./blogListReducer";
import { userLoginReducer } from "./authReducer";
import { lateLoadingReducer } from "./loadingReducer";

const rootReducer=combineReducers({
    blogList:blogListReducer,
    authUser:userLoginReducer,
    loadingLate:lateLoadingReducer,
})
export default rootReducer;