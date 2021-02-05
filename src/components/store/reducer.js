import { extend } from '../../utils/utils';
import { ActionType } from './action';
import { arrOffers } from '../../components/main/main';

const initialState = {
  city: 'Amsterdam',
  offers: arrOffers[3],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_SELECTION:
      return extend(state, {
        city: action.payload,
      });

    case ActionType.PLACES_LIST:
      return extend(state, {
        offers: action.payload,
      });
  }

  return state;
};

export { reducer };
