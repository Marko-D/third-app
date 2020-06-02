import * as actions from "../types";

const initialState = {
	currentUser: null
};

const CurrentUserReducer = (state = initialState, action) => {
	if (!action) return state;

	switch (action.type) {
		case actions.STORE_USER:
			return {
				...state,
				currentUser: action.payload,
			};
		default:
			return state;
	}
};

export default CurrentUserReducer;

