import { extend, sortArrOnCities } from '../../utils/utils';
import { ActionType } from './action';

const DEFAULT_CITY = 'Amsterdam';
const DEFAULT_TYPE_SORT = 'Popular';

const reducer = (offers) => {
  const initialState = {
    activeCity: DEFAULT_CITY,
    activeOffer: sortArrOnCities(offers)[DEFAULT_CITY],
    activeTypeSort: DEFAULT_TYPE_SORT,
    offers: offers,
    activeCityID: null,
  };

  return (state = initialState, action) => {
    switch (action.type) {
      case ActionType.CITY_SELECTION:
        return extend(state, {
          activeCity: action.payload,
          activeOffer: sortArrOnCities(state.offers)[action.payload],
        });
      case ActionType.TYPE_SORTING:
        return extend(state, {
          activeTypeSort: action.payload,
        });
      case ActionType.CITY_ID:
        return extend(state, {
          activeCityID: action.payload,
        });
    }

    return state;
  };
};

export { reducer };
