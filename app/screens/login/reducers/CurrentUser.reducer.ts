import * as actions from "../types";

const initialState = {
};

const CurrentUserReducer = (state = initialState, action) => {
	if (!action) return state;

	switch (action.type) {
		case actions.STORE_USER:
			return {...state, ...action.payload	};
			// return Object.assign({}, state, { ...action.payload });
		case actions.REMOVE_USER:
			return {};
		default:
			return state;
	}
};

export default CurrentUserReducer;

