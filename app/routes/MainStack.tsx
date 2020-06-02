import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PrivateStack } from "./PrivateStack";
import { PublicStack } from "./PublicStack";
import { AuthContext } from "../core/auth/context/AuthContext";
import configureStore from "../redux";
// import { ActivityIndicator, Text } from "react-native";

export const MainStack: React.FC<any> = () => {
	const [state, setState] = useState();
	const store = configureStore();

	store.subscribe(() => {
		console.log('MAIN STACK store------------------------ ', store.getState())
	})

	return (
		<AuthContext.Provider value={{state, setState}}>
			<NavigationContainer>
				{/* <ActivityIndicator /> */}
				{/* <Text>{state}</Text> */}
				{!state ? <PrivateStack /> : <PublicStack />}
			</NavigationContainer>
		</AuthContext.Provider>
	);
};

export default MainStack;
