export const fetchPlacesList = () => (dispatch, _getState, api) =>
  api.get(`/hotels`).then(({ data }) => dispatch());

// TODO Остановился тут
