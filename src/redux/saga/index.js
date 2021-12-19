import { call, put, takeLatest, all } from "redux-saga/effects";
import { getDashboardData, getDateRange, signIn } from "../api";
import {
  ON_BAR_CHART_DATA,
  ON_BAR_CHART_DATA_SUCCESS,
  ON_DATE_RANGE,
  ON_DATE_RANGE_SUCCESS,
  ON_PIE_CHART_DATA,
  ON_PIE_CHART_DATA_SUCCESS,
  ON_SIGN_IN,
  ON_SIGN_IN_SUCCESS,
  ON_SIGN_OUT,
  ON_SIGN_OUT_SUCCESS,
  ON_TABLE_DATA,
  ON_TABLE_DATA_SUCCESS,
} from "../constants";
import {
  barChartPayload,
  dateRangePayload,
  pieChartPayload,
  tablePayload,
} from "../constants/payloads";

function* getDataDateRange(action) {
  const { payload } = action;
  const data = yield call(getDateRange, payload);
  yield put({ type: ON_DATE_RANGE_SUCCESS, payload: data });
}

function* getTableData(action) {
  let payload = tablePayload;
  payload.chartObject.requestParam.dateRange = action.payload;
  const data = yield call(getDashboardData, payload);
  yield put({ type: ON_TABLE_DATA_SUCCESS, payload: data });
}

function* getPieData(action) {
  let payload = pieChartPayload;
  payload.chartObject.requestParam.dateRange = action.payload;
  const data = yield call(getDashboardData, payload);
  yield put({ type: ON_PIE_CHART_DATA_SUCCESS, payload: data });
}

function* getBarData(action) {
  let payload = barChartPayload;
  payload.chartObject.requestParam.dateRange = action.payload;
  const data = yield call(getDashboardData, payload);
  yield put({ type: ON_BAR_CHART_DATA_SUCCESS, payload: data });
}

function* signInUser(action) {
  const { payload } = action;
  const data = yield call(signIn, payload);
  yield put({ type: ON_SIGN_IN_SUCCESS, payload: data });
  if (data.statusCode === "200") {
    yield getDataDateRange({ payload: dateRangePayload });
  }
}

function* signOutUser() {
  yield put({ type: ON_SIGN_OUT_SUCCESS });
}

export function* dashboardDataWatcher() {
  yield all([
    takeLatest(ON_TABLE_DATA, getTableData),
    takeLatest(ON_BAR_CHART_DATA, getBarData),
    takeLatest(ON_PIE_CHART_DATA, getPieData),
    takeLatest(ON_DATE_RANGE, getDataDateRange),
  ]);
}

export function* userWatcher() {
  yield all([
    takeLatest(ON_SIGN_IN, signInUser),
    takeLatest(ON_SIGN_OUT, signOutUser),
  ]);
}

export function* rootSaga() {
  yield all([dashboardDataWatcher(), userWatcher()]);
}
