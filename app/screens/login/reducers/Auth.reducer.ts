import { LOGIN_SUCCESS, LOGOUT } from "../types";

const AuthReducer = (state = null, action) => {
	if (!action) return state;

	switch (action.type) {
		case LOGIN_SUCCESS:
			return action.payload;
		case LOGOUT:
			return null;
		default:
			return state;
	}
};

export default AuthReducer;