import * as types from "../types";

export const loginSubmit = (data) => {
	return {
		type: types.LOGIN_SUBMIT,
		payload: data,
	};
};

// Triggered whenever a login request is dispatched from whenever point in the code
export const loginRequest = (data) => {
	return {
		type: types.LOGIN_REQUEST,
		payload: data,
	};
};

// triggered when the login has succeded
export const loginSuccess = (data) => {
	return {
		type: types.LOGIN_SUCCESS,
		payload: data,
	};
};

// triggered when the login failed
export const loginError = (errors) => {
	return {
		type: types.LOGIN_ERROR,
		error: true,
		payload: errors,
	};
};

// triggered to logout the user
export const logout = () => {
	return {
		type: types.LOGOUT,
	};
};

// triggered when the login has succeded
export const storeUser = (user) => {
	return {
		type: types.STORE_USER,
		payload: user,
	};
};
