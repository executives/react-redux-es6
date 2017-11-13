import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

// simply add to the applyMiddleware args to include that package
export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk, reduxImmutableStateInvariant()));
}
