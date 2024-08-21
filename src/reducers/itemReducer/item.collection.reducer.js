import { actionTypes } from "../../constants";

const { itemTypes } = actionTypes;
const INITIAL_STATE = {
  list: [],
  isFetching: false,
  isError: false,
  message: "",
};

export default function itemCollectionReducer(
  state = INITIAL_STATE,
  { type, payload }
) {
  switch (type) {
    case itemTypes.FETCH_ITEMS_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
        message: "",
      };
    case itemTypes.FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: payload.list,
        isError: false,
      };
    case itemTypes.FETCH_ITEMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
        message: payload.message,
      };
    default:
      return state;
  }
}
