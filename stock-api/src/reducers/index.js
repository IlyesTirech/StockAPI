import { combineReducers } from 'redux';
import coinReducer from './coinReducer';
import detailReducer from './detailReducer';

const rootReducer = combineReducers({
  coins: coinReducer,
  details: detailReducer,
});

export default rootReducer;
