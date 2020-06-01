import * as actions from "../types";

const initialState = {};

const CurrentUserReducer = (state = initialState, action) => {
	if (!action) return state;

	switch (action.type) {
		case actions.LOGIN_SUCCESS:
			return {
				...state,
				[action.payload.id]: action.payload,
			};
		default:
			return state;
	}
};

export default CurrentUserReducer;

