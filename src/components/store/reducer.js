import { extend, sortArrOnCities } from '../../utils/utils';
import { ActionType } from './action';
import { AuthorizationStatus } from '../../const/const';

const reducer = (offers) => {
  const DEFAULT_CITY = 'Amsterdam';
  const DEFAULT_TYPE_SORT = 'POPULAR';
  const DEFAULT_CITY_ID = '0';

  const initialState = {
    activeCity: DEFAULT_CITY,
    activeOffer: sortArrOnCities(offers)[DEFAULT_CITY],
    activeTypeSort: DEFAULT_TYPE_SORT,
    offers: offers,
    hotels: [],
    activeCityID: DEFAULT_CITY_ID,
    AuthorizationStatus: AuthorizationStatus.NO_AUTH,
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
      case ActionType.REQUIRED_AUTHORIZATION:
        return extend(state, {
          AuthorizationStatus: action.payload,
        });

      case ActionType.LOAD_HOTELS:
        return extend(state, {
          hotels: action.payload,
        });
    }

    return state;
  };
};

export { reducer };
