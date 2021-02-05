export const ActionType = {
  CITY_SELECTION: `CITY_SELECTION`,
  PLACES_LIST: `PLACES_LIST`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CITY_SELECTION,
    payload: city,
  }),

  loadingPlacesList: (arrOffers) => ({
    type: ActionType.PLACES_LIST,
    payload: arrOffers,
  }),
};
