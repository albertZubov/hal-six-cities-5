export const ActionType = {
  CITY_SELECTION: `CITY_SELECTION`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CITY_SELECTION,
    payload: city,
  }),
};
