import { extend } from 'utils/utils';
import { ActionType } from '../action';

const loadData = () => {
  const initialState = {
    offers: [],
    offersNearby: [],
    comments: [],
  };

  return (state = initialState, action) => {
    switch (action.type) {
      case ActionType.LOAD_OFFERS:
        return extend(state, {
          offers: action.payload,
        });
      case ActionType.LOAD_COMMENTS:
        return extend(state, {
          comments: action.payload,
        });

      case ActionType.LOAD_OFFERS_NEARBY:
        return extend(state, {
          offersNearby: action.payload,
        });

      case ActionType.CHANGE_FAVORITE:
        const newOffers = state.offers.map((offer) => {
          if (offer.id === action.payload.id) {
            // Разобрать
            return action.payload;
          }

          return offer;
        });

        return extend(state, {
          offers: newOffers,
        });
    }

    return state;
  };
};

export { loadData };
