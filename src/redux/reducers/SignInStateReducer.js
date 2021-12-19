import { ON_SIGN_IN_SUCCESS, ON_SIGN_OUT } from "../constants";

const initialState = { isLoggedIn: false };

const SignInStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_SIGN_IN_SUCCESS:
      let data = action.payload;
      if (data.statusCode === "200") {
        const date = new Date();
        date.setDate(date.getDate() + 1);
        const item = {
          value: data.token,
          expiry: date.getTime(),
        };
        window.localStorage.setItem("token", JSON.stringify(item));
        data.token = undefined;
        return { ...state, data, isLoggedIn: true };
      }
      return { ...state, ...action.payload, isLoggedIn: false };
    case ON_SIGN_OUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export default SignInStateReducer;
