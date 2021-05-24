import { combineReducers } from 'redux';
import { activeReducer } from './active-reducer';
import { loadData } from './load-data';
import { user } from './user';

export const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.DATA]: loadData(),
  [NameSpace.PROCESS]: activeReducer(),
  [NameSpace.USER]: user(),
});
