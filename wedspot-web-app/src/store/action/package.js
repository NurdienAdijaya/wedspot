import * as types from "../const/types";

export const getVenueHome = (page = 1) => {
  return {
    type: types.GET_EXAMPLE_VENUE_BEGIN,
    page,
  };
};

export const getOrganizerHome = (page = 1) => {
  return {
    type: types.GET_EXAMPLE_ORGANIZER_BEGIN,
    page,
  };
};

export const getPackageHome = (page = 1) => {
  return {
    type: types.GET_EXAMPLE_PACKAGES_BEGIN,
    page,
  };
};
