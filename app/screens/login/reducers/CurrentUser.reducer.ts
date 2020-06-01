import { LOGIN_SUCCESS } from "../types";

const initialState = {};

const CurrentUserReducer = (state = initialState, action) => {
	if (!action) return state;

	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				[action.payload.id]: action.payload,
			};
		default:
			return state;
	}
};

export default CurrentUserReducer;

