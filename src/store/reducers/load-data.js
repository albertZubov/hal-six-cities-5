import { extend } from 'utils/utils';
import { ActionType } from '../action';

const loadData = () => {
  const initialState = {
    offers: [],
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
    }

    return state;
  };
};

export { loadData };
