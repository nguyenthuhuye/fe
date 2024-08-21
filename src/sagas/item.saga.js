import { takeLatest, put } from "redux-saga/effects";
import { itemActions } from "../actions";
import { actionTypes } from "../constants";
import { itemApi, authApi } from "../api";

function* handleFetchListItems() {
  try {
    const res = yield itemApi.fetchList();
    console.log(res, "ressss");
    yield put(
      itemActions.fetchListSuccess({
        list: res,
      })
    );
  } catch (error) {
    yield put(
      itemActions.fetchListFailure({
        message: error.message,
      })
    );
  }
}
function* handleLogin(action) {
  console.log(action);
  try {
    const res = yield authApi.login()
    console.log(res, "ressss");
    // yield put(
    //   itemActions.fetchListSuccess({
    //     list: res,
    //   })
    // );
  } catch (error) {
    // yield put(
    //   itemActions.fetchListFailure({
    //     message: error.message,
    //   })
    // );
  }
}


const itemSaga = [
  takeLatest(actionTypes.itemTypes.FETCH_ITEMS_REQUEST, handleFetchListItems),
  takeLatest(actionTypes.authTypes.LOGIN_REQUEST, handleLogin),
];

export default itemSaga;
