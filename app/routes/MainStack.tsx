import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PublicStack } from "./PublicStack";
import { PrivateStack } from "./PrivateStack";
import configureStore from "../redux";
// import { ActivityIndicator, Text } from "react-native";
import { connect } from 'react-redux'

const MainStack: React.FC<any> = (props) => {
	return (
			<NavigationContainer>
				{/* <ActivityIndicator /> */}
				{!!props.auth ? <PrivateStack /> : <PublicStack />}
			</NavigationContainer>
	);
};

const mapStateToProps = (state) => {
	console.log('MAIN STACK-------------------', state.LoginReducers);
	return {
		auth: state.LoginReducers.auth,
		currentUser: state.LoginReducers.currentUser
	}
}

export default connect(mapStateToProps, null)(MainStack)
