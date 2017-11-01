import {combineReducers} from 'redux';
import courses from './courseReducer';

// prop name chosen here is accessed in container as 'state.courses', hence why its not courseReducer
const rootReducer = combineReducers({
  courses 
});

export default rootReducer;
