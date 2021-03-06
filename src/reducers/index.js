import { combineReducers } from 'redux-immutable';
import tagsReducer from './tagsReducer';

const rootReducer = combineReducers({
  tags: tagsReducer,
});

export default rootReducer;
