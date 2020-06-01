import { combineReducers } from "redux";
import CurrentUserReducer from '../reducers/CurrentUser.reducer'
import AuthReducer from '../reducers/Auth.reducer'

const LoginReducers = combineReducers({
  currentUser: CurrentUserReducer, 
  auth: AuthReducer 
});

export default LoginReducers;