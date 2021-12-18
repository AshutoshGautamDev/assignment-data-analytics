import { ON_SIGN_IN_SUCCESS, ON_SIGN_OUT } from "../constants";

const initialState = { isLoggedIn: false };

const SignInStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_SIGN_IN_SUCCESS:
      if (action.payload.statusCode === '200')
        return { ...state, ...action.payload, isLoggedIn: true };
      return { ...state, ...action.payload, isLoggedIn: false };
    case ON_SIGN_OUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export default SignInStateReducer;
