import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Login } from "../screens/login/Login";

interface PrivateStackProps {}

const Stack = createStackNavigator();

export const PrivateStack: React.FC<PrivateStackProps> = ({}) => {
	return (
    <Stack.Navigator>
	  	<Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    </Stack.Navigator>
	);
};
