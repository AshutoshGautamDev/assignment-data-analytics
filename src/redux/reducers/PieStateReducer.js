import { ON_PIE_CHART_DATA_SUCCESS } from "../constants";

const initialState = {};

const PieStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_PIE_CHART_DATA_SUCCESS:
      const data = action.payload.result.data;
      return { ...state, data };
    default:
      return state;
  }
};

export default PieStateReducer;
