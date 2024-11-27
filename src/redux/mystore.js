import { createStore,applyMiddleware,compose } from "redux";
import rootReducer from "../redux/reducers/index";
import { thunk } from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const mystore=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
export default mystore;