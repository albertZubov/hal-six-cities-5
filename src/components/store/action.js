export const ActionType = {
  CITY_SELECTION: `CITY_SELECTION`,
  // LOAD_PLACES_LIST: `LOAD_PLACES_LIST`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CITY_SELECTION,
    payload: city,
  }),

  // loadingPlacesList: (hotels) => ({
  //   type: ActionType.LOAD_PLACES_LIST,
  //   payload: hotels,
  // }),
};
