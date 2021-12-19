import axios from "axios";
import { GET_DATA, GET_DATE_RANGE, SIGN_IN } from "./constants";

const getDashboardData = (payload) => {
  const token = JSON.parse(window.localStorage.getItem("token"));
  const header = { headers: { "X-Auth-Token": token.value } };
  return axios
    .post(GET_DATA, payload, header)
    .then((response) => response.data);
};

const getDateRange = (payload) => {
  const token = JSON.parse(window.localStorage.getItem("token"));
  const header = { headers: { "X-Auth-Token": token.value } };
  return axios
    .post(GET_DATE_RANGE, payload, header)
    .then((response) => response.data);
};

const signIn = (payload) => {
  return axios.post(SIGN_IN, payload).then((response) => response.data);
};

export { getDashboardData, getDateRange, signIn };
