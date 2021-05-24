import { extend } from 'utils/utils';
import { ActionType } from '../action';

const activeReducer = () => {
  const DEFAULT_CITY = `Amsterdam`;
  const DEFAULT_TYPE_SORT = 'POPULAR';
  const DEFAULT_CITY_ID = null;

  const initialState = {
    activeCity: DEFAULT_CITY,
    activeTypeSort: DEFAULT_TYPE_SORT,
    activeCityID: DEFAULT_CITY_ID,
  };

  return (state = initialState, action) => {
    switch (action.type) {
      case ActionType.CITY_SELECTION:
        return extend(state, {
          activeCity: action.payload,
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

export { activeReducer };
