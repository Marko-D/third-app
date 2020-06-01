import * as actions from "../types";

const AuthReducer = (state = null, action) => {
	if (!action) return state;

	switch (action.type) {
		case actions.LOGIN_SUCCESS:
			return action.payload;
		case actions.LOGOUT:
			return null;
		default:
			return state;
	}
};

export default AuthReducer;