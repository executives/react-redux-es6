import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

// prop name chosen here is accessed in container as 'state.courses', hence why its not courseReducer
const rootReducer = combineReducers({
  courses,
  authors
});

export default rootReducer;
