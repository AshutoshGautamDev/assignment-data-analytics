import { ON_BAR_CHART_DATA_SUCCESS } from "../constants";

const initialState = {};

const BarStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_BAR_CHART_DATA_SUCCESS:
      const data = action.payload.result.data;
      return { ...state, data };
    default:
      return state;
  }
};

export default BarStateReducer;
