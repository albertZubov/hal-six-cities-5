import { extend, sortArrOnCities, sortOffer } from '../../utils/utils';
import { ActionType } from './action';

const DEFAULT_CITY = 'Amsterdam';
const DEFAULT_TYPE_SORT = 'popular';

const reducer = (offers) => {
  const initialState = {
    activeCity: DEFAULT_CITY,
    activeOffer: sortArrOnCities(offers)[DEFAULT_CITY],
    activeTypeSort: null,
    offers: offers,
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
          // activeSortOffer: sortOffer(action.payload),
        });
    }

    return state;
  };
};

export { reducer };
