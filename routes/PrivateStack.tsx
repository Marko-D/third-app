import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Login } from "../screens/login/Login";
import { Register } from "../screens/register/Register";

interface PrivateStackProps {}

const Stack = createStackNavigator();

export const PrivateStack: React.FC<PrivateStackProps> = ({}) => {
	return (
    <Stack.Navigator>
	  	<Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
	  	<Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
    </Stack.Navigator>
	);
};
