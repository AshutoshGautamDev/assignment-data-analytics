import { combineReducers } from "redux";
import { ON_SIGN_OUT } from "../constants";
import BarStateReducer from "./BarStateReducer";
import DateRangeReducer from "./DateRangeReducer";
import PieStateReducer from "./PieStateReducer";
import SignInStateReducer from "./SignInStateReducer";
import TableStateReducer from "./TableStateReducer";

const appReducer = combineReducers({
  pieChart: PieStateReducer,
  barChart: BarStateReducer,
  table: TableStateReducer,
  user: SignInStateReducer,
  dateRange: DateRangeReducer,
});

export const RootReducer = (state, action) => {
  if (action.type === ON_SIGN_OUT) {
    state = undefined;
    window.localStorage.removeItem("token")
  }
  return appReducer(state, action);
};
