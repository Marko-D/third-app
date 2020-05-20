import React, { Component, createContext } from "react";

const defaultState = {};

export const AuthContext = createContext(defaultState);

export default class AuthContextProvider extends Component {
	state = {
		isLoggedIn: false,
		user: {
			userName: "Marta i Stefi",
			email: "example@mail.com",
		},
	};

	render() {
		return (
			<AuthContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </AuthContext.Provider>
		);
	}
}
