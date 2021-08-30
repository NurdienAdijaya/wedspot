import * as types from "../const/types";

const intialState = {
  allSearchList: {
    items: [],
    isLoading: false,
    isSuccess: null,
    isError: null,
    message: [],
  },
};

const search = (state = intialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };

    case types.GET_SEARCH_BEGIN:
      return {
        ...state,
        allSearchList: {
          isLoading: true,
        },
      };
    case types.GET_SEARCH_SUCCESS:
      return {
        ...state,
        allSearchList: {
          items: payload,
          isLoading: false,
        },
      };
    case types.GET_SEARCH_FAIL:
      return {
        ...state,
        allSearchList: {
          isError: true,
          isLoading: false,
          message: payload,
          error: error,
        },
      };
  }
};

export default search;
