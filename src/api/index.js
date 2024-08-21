import { Helpers } from "../utils";
import ApiScheme from "./@scheme";

export const authApi = {
  login: Helpers.createApi(ApiScheme.AUTHEN.LOGIN),
  // logout: Helpers.createApi(ApiScheme.AUTHEN.LOGOUT),
  // validateToken: Helpers.createApi(ApiScheme.AUTHEN.VALIDATE_TOKEN),
};

export const itemApi = {
  fetchList: Helpers.createApi(ApiScheme.ITEMS.FETCH_LIST),
};
