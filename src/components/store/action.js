export const ActionType = {
  CITY_SELECTION: `CITY_SELECTION`,
  TYPE_SORTING: `TYPE_SORTING`,
  CITY_ID: `CITY_ID `,
  REQUIRED_AUTHORIZATION: 'REQUIRED_AUTHORIZATION',
  LOAD_HOTELS: 'LOAD_HOTELS',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CITY_SELECTION,
    payload: city,
  }),

  sortingType: (typeSorting) => ({
    type: ActionType.TYPE_SORTING,
    payload: typeSorting,
  }),

  getCityID: (id) => ({
    type: ActionType.CITY_ID,
    payload: id,
  }),

  requereAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  loadingHotels: (hotels) => ({
    type: ActionType.LOAD_HOTELS,
    payload: hotels,
  }),
};
