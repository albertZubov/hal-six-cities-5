export const ActionType = {
  CITY_SELECTION: `CITY_SELECTION`,
  TYPE_SORTING: `TYPE_SORTING`,
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
};
