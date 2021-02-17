import { extend, sortArrOnCities } from '../../utils/utils';
import { ActionType } from './action';
import { DefaultValue } from '../../const/const';

const reducer = (offers) => {
  const initialState = {
    activeCity: DefaultValue.CITY,
    activeOffer: sortArrOnCities(offers)[DefaultValue.CITY],
    activeTypeSort: DefaultValue.TYPE_SORT,
    offers: offers,
    activeCityID: DefaultValue.CITY_ID,
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
