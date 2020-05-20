import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PrivateStack } from "./PrivateStack";
import { PublicStack } from "./PublicStack";
import { AuthContext } from "./../context/AuthContext";

export const MainStackNavigator: React.FC<any> = () => {
	const Auth = useContext(AuthContext);

	return (
		<NavigationContainer>
			{Auth.isLoggedIn === false ? <PrivateStack /> : <PublicStack />}
		</NavigationContainer>
	);
};

export default MainStackNavigator;
