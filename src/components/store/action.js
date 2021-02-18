export const ActionType = {
  CITY_SELECTION: `CITY_SELECTION`,
  TYPE_SORTING: `TYPE_SORTING`,
  CITY_ID: `CITY_ID `,
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
};
