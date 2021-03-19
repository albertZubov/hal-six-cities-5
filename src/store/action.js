export const ActionType = {
  CITY_SELECTION: `CITY_SELECTION`,
  TYPE_SORTING: `TYPE_SORTING`,
  CITY_ID: `CITY_ID `,
  REQUIRED_AUTHORIZATION: 'REQUIRED_AUTHORIZATION',
  LOAD_OFFERS: 'LOAD_OFFERS',
  LOAD_USER_DATA: 'LOAD_USER_DATA',
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

  loadingHotels: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),

  loadUserData: (userData) => ({
    type: ActionType.LOAD_USER_DATA,
    payload: userData,
  }),
};
