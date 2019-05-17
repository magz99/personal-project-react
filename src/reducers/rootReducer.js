import { combineReducers } from "redux";
import {dataReducer, formReducer} from "./app.reducer";

// Couldn't come up with a better name
const rootReducer = combineReducers({
  dataReducer,
  formReducer
});

export default rootReducer;
