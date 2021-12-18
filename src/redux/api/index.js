import axios from "axios";
import { GET_DATA, GET_DATE_RANGE, SIGN_IN } from "./constants";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyLXdra2NBeGw2NVY2aDlBbGlcL3NRbUNEMjZGRXlscFdSZ0ZNdnEydnhadExIK0FiTmlQVExxMmwrSmF5N1k3ZVp1b1pWXC9xRnF3SHA4eU9YSE12NjBFemNzREFtYUxoZThLUXBUdUd5Y0Y4TEFSMmc9PSIsImlzcyI6InJhaHVsa3VtYXIiLCJleHAiOjE2Mzk4ODE4OTYsImlhdCI6MTYzOTc5NTQ5NiwianRpIjoiMWVjNzIzZjczMWFkYTM1YTBiYmUwYjRiZjY5NWM5YTRhMGUxYmU5MGNlYzU3YmNhZjQxMjRiZjc5ZGM2N2VkYThlZmM5OTIyMjcxMTY1ZDQ1OTNkOWU5OWVjZTIyY2JhZTM0NDgwMDM4ZmJlNWQxN2UwNzkwZDMzZjEwOGI4NTFlMGUyMGJmYzBiODdhOTE3NzM3MjM2YWIyNTVhNzgxZGY3ZGE5NDZlNmMxNTU4MTU4MzdlMmU5NjhlYzg2MDkwMzU3ZmJlZTcwN2I4NTc3ZTE1N2IyMmJhOWVjZmIyN2U1YTQ1MjM3OTRmZWVjNTBmMTA5MDAyZDNiN2U2OGE0NCJ9.XVtS2fCOuhK2oBIvR8GNEap3Vnys9Vbn9jhwkZsNVnY";

const header = { headers: { "X-Auth-Token": token } };
const getDashboardData = (payload) => {
  console.log('Check', header, payload)
  return axios
    .post(
      GET_DATA,
      payload,
      header
    )
    .then((response) => response.data);
};

const getDateRange = (payload) => {
  return axios
    .post(GET_DATE_RANGE, payload, header)
    .then((response) => response.data);
};

const signIn = (payload) => {
  return axios.post(SIGN_IN, payload).then((response) => response.data);
};

export { getDashboardData, getDateRange, signIn };
