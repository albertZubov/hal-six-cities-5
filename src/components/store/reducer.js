import { extend, sortArrOnCities } from '../../utils/utils';
import { ActionType } from './action';

const DEFAULT_CITY = 'Amsterdam';

const reducer = (offers) => {
  const initialState = {
    activeCity: DEFAULT_CITY,
    activeOffer: sortArrOnCities(offers)[DEFAULT_CITY],
    offers: offers,
  };

  return (state = initialState, action) => {
    switch (action.type) {
      case ActionType.CITY_SELECTION:
        return extend(state, {
          activeCity: action.payload,
          activeOffer: sortArrOnCities(state.offers)[action.payload],
        });

      // case ActionType.LOAD_PLACES_LIST:
      //   return extend(state, {
      //     activeOffer: action.payload,
      //   });
    }

    return state;
  };
};

export { reducer };
