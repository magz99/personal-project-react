import { combineReducers } from "redux";
import appReducer from "./app.reducer";

const rootReducer = combineReducers({
  theReducer: appReducer
});

export default rootReducer;
