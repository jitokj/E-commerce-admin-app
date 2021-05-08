import { authConstants } from "../actions/constants";

const initialState = {
  name: "",
};

const authReducer = (state = initialState, action) => {
  console.log("action-->", action);
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return (state = {
        ...state,
        ...action.payload,
      });

    default:
      return state;
  }
};
export default authReducer;
