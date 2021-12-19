import {
  ON_BAR_CHART_DATA,
  ON_PIE_CHART_DATA,
  ON_SIGN_IN,
  ON_SIGN_OUT,
  ON_TABLE_DATA,
} from "../constants";

export const getTableData = (dateRange) => {
  return { type: ON_TABLE_DATA, payload: dateRange };
};

export const getPieData = (dateRange) => {
  return { type: ON_PIE_CHART_DATA, payload: dateRange };
};

export const getBarData = (dateRange) => {
  return { type: ON_BAR_CHART_DATA, payload: dateRange };
};

export const onSignIn = (userDetail) => {
  return { type: ON_SIGN_IN, payload: userDetail };
};

export const onSignOut = () => {
  return { type: ON_SIGN_OUT };
};
