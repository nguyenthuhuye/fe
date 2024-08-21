import { actionTypes } from "../constants";
const { authTypes } = actionTypes;

const INITIAL_STATE = {
  userToken: null,
  isFetching: false,
  isError: false,
  errorMessage: "",
};

export default function authReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case authTypes.LOGIN_REQUEST:
    case authTypes.LOGOUT_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
        errorMessage: "",
      };
    case authTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        userToken: payload.token,
        isError: false,
        errorMessage: "",
      };
    case authTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        userToken: null,
        isError: false,
        errorMessage: "",
      };
    case authTypes.LOGIN_FAILURE:
    case authTypes.LOGOUT_FAILURE:
      return {
        ...state,
        isFetching: false,
        userToken: null,
        isError: true,
        errorMessage: payload.message,
      };
    default:
      return state;
  }
}
