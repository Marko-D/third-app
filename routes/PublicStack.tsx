import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/home/Home";
import { About } from "../screens/about/About";
import { SelectRole } from "../screens/selectRole/SelectRole";

interface PublicStackProps {}

const Stack = createStackNavigator();

export const PublicStack: React.FC<PublicStackProps> = ({}) => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={Home} options={{ title: "Home Screen" }}/>
			<Stack.Screen name="About" component={About} 
			// options={({ route }) => ({	title: route.params.item.name})}			
			/>
			<Stack.Screen name="SelectRole" component={SelectRole} />

		</Stack.Navigator>
	);
};
