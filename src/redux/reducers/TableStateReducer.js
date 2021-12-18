import { ON_TABLE_DATA_SUCCESS } from "../constants";

const initialState = {};

const TableStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_TABLE_DATA_SUCCESS:
      const data = action.payload.result.data;
      return { ...state, data };
    default:
      return state;
  }
};

export default TableStateReducer;
