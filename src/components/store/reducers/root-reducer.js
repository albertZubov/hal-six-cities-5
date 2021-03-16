import { combineReducers } from 'redux';
import { activeReducer } from '../reducers/active-reducer';
import { loadData } from '../reducers/load-data';

export const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
};

export default combineReducers({
  [NameSpace.DATA]: loadData(),
  [NameSpace.PROCESS]: activeReducer(),
});
