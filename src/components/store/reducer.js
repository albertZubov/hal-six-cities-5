import { extend, sortArrOnCities } from '../../utils/utils';
import { ActionType } from './action';
import { AuthorizationStatus } from '../../const/const';

const reducer = () => {
  const DEFAULT_CITY = `Amsterdam`;
  const DEFAULT_TYPE_SORT = 'POPULAR';
  const DEFAULT_CITY_ID = '0';

  const initialState = {
    activeCity: DEFAULT_CITY,
    activeOffer: [],
    activeTypeSort: DEFAULT_TYPE_SORT,
    offers: [],
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

      case ActionType.LOAD_OFFERS:
        return extend(state, {
          offers: action.payload,
        });
    }

    return state;
  };
};

export { reducer };
