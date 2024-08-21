import { REST_API_METHOD as METHOD, BASE_URL } from "../constants";

const API_SCHEME = {
  // update when apply real authen api
  AUTHEN: {
    LOGIN: {
      url: `${BASE_URL}/users/login`,
      method: METHOD.POST,
    }
  },
  // business api
  ITEMS: {
    FETCH_LIST: {
      url: `${BASE_URL}/items`,
      method: METHOD.GET,
    },
    FETCH_DETAIL: {
      url: `${BASE_URL}/items/:id`,
      method: METHOD.GET,
    },
    CREATE: {
      url: `${BASE_URL}/items`,
      method: METHOD.POST,
    },
    UPDATE: {
      url: `${BASE_URL}/items/:id`,
      method: METHOD.PUT,
    },
    DELETE: {
      url: `${BASE_URL}/items/:id`,
      method: METHOD.DELETE,
    },
  },
};

export default API_SCHEME;
