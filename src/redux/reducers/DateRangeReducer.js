import { ON_DATE_RANGE_SUCCESS, ON_DATE_RANGE_UPDATE } from "../constants";

const initialState = {};

const DateRangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_DATE_RANGE_SUCCESS:
      const data = action.payload.result;
      return { ...state, data };
    case ON_DATE_RANGE_UPDATE:
      const updatedData = action.payload;
      return { ...state, updatedData };
    default:
      return state;
  }
};

export default DateRangeReducer;
