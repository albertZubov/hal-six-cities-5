import { extend } from 'utils/utils';
import { ActionType } from '../action';
import { AuthorizationStatus } from 'const/const';

const user = () => {
  const initialState = {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  };

  return (state = initialState, action) => {
    switch (action.type) {
      case ActionType.REQUIRED_AUTHORIZATION:
        return extend(state, {
          authorizationStatus: action.payload,
        });
    }
    return state;
  };
};

export { user };
