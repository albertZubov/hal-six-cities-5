export const ActionType = {
  CITY_SELECTION: `CITY_SELECTION`,
  TYPE_SORTING: `TYPE_SORTING`,
  CITY_ID: `CITY_ID `,
  REQUIRED_AUTHORIZATION: 'REQUIRED_AUTHORIZATION',
  LOAD_OFFERS: 'LOAD_OFFERS',
  LOAD_OFFERS_NEARBY: 'LOAD_OFFERS_NEARBY',
  LOAD_USER_DATA: 'LOAD_USER_DATA',
  REDIRECT_TO_ROUTE: 'REDIRECT_TO_ROUTE',
  LOAD_COMMENTS: 'LOAD_COMMENTS',
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

  loadingHotelsNearby: (offers) => ({
    type: ActionType.LOAD_OFFERS_NEARBY,
    payload: offers,
  }),

  loadUserData: (userData) => ({
    type: ActionType.LOAD_USER_DATA,
    payload: userData,
  }),

  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),

  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
};
