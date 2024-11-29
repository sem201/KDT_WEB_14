import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import isVisibleReducer from "./isVisibleReducer";
import leftMoneyReducer from "./leftMoneyReducer";

const rootReducer = combineReducers({
  // key : value
  counter: counterReducer,
  isVisible: isVisibleReducer,
  leftMoney: leftMoneyReducer,
});

export default rootReducer;
