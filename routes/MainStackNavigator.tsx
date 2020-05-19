import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PrivateStack } from "./PrivateStack";
import { PublicStack } from "./PublicStack";

const Stack = createStackNavigator();

export default class MainStackNavigator extends React.Component {
	constructor(props: any) {
		super(props);

		this.state = { isLoggedIn: false };
	}

	setIsLoggedIn = (isLoggedIn: any) => {
		this.setState({ isLoggedIn });
	};

	render = () => {
		// Using an arrow function to allow to pass setIsLoggedIn to PrivateStack
		// Pass setIsLoggedIn from the props of PrivateStack to the screens it contains
		// then from the screens call this function with a true/false param
		// const LoginScreens = (props) => (
		// 	<PrivateStack {...props} setIsLoggedIn={this.setIsLoggedIn} />
		// );

		return (
				// If not logged in, the user will be shown this route
				// When logged in, the user will be shown this route
			<NavigationContainer>
				{this.state.isLoggedIn === false ? <PrivateStack /> : <PublicStack />}
			</NavigationContainer>
		);
	};
}

// function MainStackNavigator() {
// 	const isSignedIn = false;
// 	return (
// 		<NavigationContainer>
// 			<Stack.Navigator
// 				initialRouteName="Home"
// 				headerMode="float"
// 				screenOptions={{
// 					gestureEnabled: true,
// 					headerStyle: {
// 						backgroundColor: "#101010",
// 					},
// 					headerTitleStyle: {
// 						fontWeight: "bold",
// 					},
// 					headerTintColor: "#ffd700",
// 					headerBackTitleVisible: false,
// 				}}
// 			>
// 				isSignedIn ? (
// 				<>
// 					<PublicStack />
// 				</>
// 				) : (
// 				<>
// 					<PrivateStack />
// 				</>
// 				)
// 			</Stack.Navigator>
// 		</NavigationContainer>
// 	);
// }

// export default MainStackNavigator;
