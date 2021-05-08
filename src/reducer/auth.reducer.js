import { authConstants } from "../actions/constants";

const initialState = {
  token: null,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    picture: "",
  },
  authenticate: false,
  authenticating: false,
};

const authReducer = (state = initialState, action) => {
  console.log("action-->", action);
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return (state = {
        ...state,
        authenticating: true,
      });
    case authConstants.LOGIN_SUCCESS:
      return (state = {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        authenticate: true,
        authenticating: false,
      });
    default:
      return state;
  }
};
export default authReducer;
