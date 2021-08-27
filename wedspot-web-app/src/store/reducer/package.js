import * as types from "../const/types";

const initialState = {
  listPackageExample: {
    packages: [],
    isLoading: false,
    isSuccess: null,
    isError: null,
    message: [],
  },

  listOrganizerExample: {
    packages: [],
    isLoading: false,
    isSuccess: null,
    isError: null,
    message: [],
  },

  listVenueExample: {
    packages: [],
    isLoading: false,
    isSuccess: null,
    isError: null,
    message: [],
  },
  listPackageSearch: {
    resultPackages: [],
    isLoading: false,
    isSuccess: null,
    isError: null,
    message: [],
  },

  listOrganizerSearch: {
    resultOrganizers: [],
    isLoading: false,
    isSuccess: null,
    isError: null,
    message: [],
  },

  listVenueSearch: {
    resultVenues: [],
    isLoading: false,
    isSuccess: null,
    isError: null,
    message: [],
  },
};

const packages = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };

    case types.GET_EXAMPLE_PACKAGES_BEGIN:
      return {
        ...state,
        listPackageExample: {
          isLoading: true,
        },
      };
    case types.GET_EXAMPLE_PACKAGES_SUCCESS:
      return {
        ...state,
        listPackageExample: {
          packages: payload,
          isLoading: false,
        },
      };
    case types.GET_EXAMPLE_PACKAGES_FAIL:
      return {
        ...state,
        listPackageExample: {
          isError: true,
          isLoading: false,
          message: payload,
          error: error,
        },
      };

    case types.GET_EXAMPLE_ORGANIZER_BEGIN:
      return {
        ...state,
        listOrganizerExample: {
          isLoading: true,
        },
      };
    case types.GET_EXAMPLE_ORGANIZER_SUCCESS:
      return {
        ...state,
        listOrganizerExample: {
          packages: payload,
          isLoading: false,
        },
      };
    case types.GET_EXAMPLE_ORGANIZER_FAIL:
      return {
        ...state,
        listOrganizerExample: {
          isError: true,
          isLoading: false,
          message: payload,
          error: error,
        },
      };

    case types.GET_EXAMPLE_VENUE_BEGIN:
      return {
        ...state,
        listVenueExample: {
          isLoading: true,
        },
      };
    case types.GET_EXAMPLE_VENUE_SUCCESS:
      return {
        ...state,
        listVenueExample: {
          packages: payload,
          isLoading: false,
        },
      };
    case types.GET_EXAMPLE_VENUE_FAIL:
      return {
        ...state,
        listVenueExample: {
          isError: true,
          isLoading: false,
          message: payload,
          error: error,
        },
      };

    case types.GET_SEARCH_PACKAGES_BEGIN:
      return {
        ...state,
        listPackageSearch: {
          isLoading: true,
        },
      };
    case types.GET_SEARCH_PACKAGES_SUCCESS:
      return {
        ...state,
        listPackageSearch: {
          packages: payload,
          isLoading: false,
        },
      };
    case types.GET_SEARCH_PACKAGES_FAIL:
      return {
        ...state,
        listPackageSearch: {
          isError: true,
          isLoading: false,
          message: payload,
          error: error,
        },
      };

    case types.GET_SEARCH_ORGANIZER_BEGIN:
      return {
        ...state,
        listOrganizerSearch: {
          isLoading: true,
        },
      };
    case types.GET_SEARCH_ORGANIZER_SUCCESS:
      return {
        ...state,
        listOrganizerSearch: {
          packages: payload,
          isLoading: false,
        },
      };
    case types.GET_SEARCH_ORGANIZER_FAIL:
      return {
        ...state,
        listOrganizerSearch: {
          isError: true,
          isLoading: false,
          message: payload,
          error: error,
        },
      };

    case types.GET_SEARCH_VENUE_BEGIN:
      return {
        ...state,
        listVenueSearch: {
          isLoading: true,
        },
      };
    case types.GET_SEARCH_VENUE_SUCCESS:
      return {
        ...state,
        listVenueSearch: {
          packages: payload,
          isLoading: false,
        },
      };
    case types.GET_SEARCH_VENUE_FAIL:
      return {
        ...state,
        listVenueSearch: {
          isError: true,
          isLoading: false,
          message: payload,
          error: error,
        },
      };
  }
};
export default packages;
