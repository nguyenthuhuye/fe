import { actionTypes } from "../../constants";

const { itemTypes } = actionTypes;
const INITIAL_STATE = {
  item: {
    id: null,
  },
  isFetching: false,
  isError: false,
  message: "",
};

export default function itemInstanceReducer(
  state = INITIAL_STATE,
  { type, payload }
) {
  switch (type) {
    case itemTypes.DETAIL_ITEM_REQUEST:
    case itemTypes.CREATE_ITEM_REQUEST:
    case itemTypes.DELETE_ITEM_REQUEST:
    case itemTypes.UPDATE_ITEM_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
        message: "",
      };
    case itemTypes.DELETE_ITEM_FAILURE:
    case itemTypes.CREATE_ITEM_FAILURE:
    case itemTypes.UPDATE_ITEM_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
        message: payload.message,
      };
    case itemTypes.CREATE_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        item: payload.item,
      };
    case itemTypes.UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        item: payload.item,
      };
    case itemTypes.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case itemTypes.CLEAR_ITEM:
      return INITIAL_STATE;
    default:
      return state;
  }
}
