import { combineReducers } from "redux";
import appReducer from "./app.reducer";

// Couldn't come up with a better name
const rootReducer = combineReducers({
  theReducer: appReducer
});

export default rootReducer;
