import React from "react";
import MainStackNavigator from "./routes/MainStackNavigator";
import "./styles/index";

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
// import { View, Text } from "react-native";

 const App = () => {
	let [fontsLoaded] = useFonts({
    'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf')
	});


	if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
		// 	<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		// 		<Text>Platform Default</Text>
		// 		<Text style={{ fontFamily: 'Nunito-Bold' }}>Inter Black</Text>
		// 	</View>
    	<MainStackNavigator />
    );
	}
	
}
export default App;