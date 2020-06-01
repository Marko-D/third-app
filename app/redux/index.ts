import { combineReducers } from "redux";
import { createStore, compose } from "redux";
import LoginReducers from '../screens/login/reducers'

const RootReducers = combineReducers({ 
  LoginReducers 
});

// https://stackoverflow.com/questions/52800877/has-anyone-came-across-this-error-in-ts-with-redux-dev-tools-property-redux
const composeEnhancers = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;
const configureStore = () => createStore(RootReducers, composeEnhancers);

export default configureStore;