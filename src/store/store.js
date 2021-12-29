import mealbynameReducer from './meals.reducer';
import thunk from 'redux-thunk'
import { createStore, combineReducers ,applyMiddleware} from 'redux';
const store = new createStore(
  combineReducers({
    mealbynameReducer,
  }),applyMiddleware(thunk)
);
export default store;
