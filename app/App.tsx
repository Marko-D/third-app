import React from "react";
import MainStack from "./routes/MainStack";
import "./styles/index";
import { useFonts } from '@use-expo/font';
import { AppLoading, registerRootComponent } from 'expo';
import { YellowBox } from 'react-native';
// import { View, Text } from "react-native";

 const App = () => {

	// “Remote debugger is in a background tab” warning in React Native 
	YellowBox.ignoreWarnings(['Remote debugger']);
	console.ignoredYellowBox = ['Remote debugger'];


	let [fontsLoaded] = useFonts({
    'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf')
	});


	if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
			// <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			// 	<Text>Platform Default</Text>
			// 	<Text style={{ fontFamily: 'Nunito-Bold', fontSize: 30 }}>Inter Black</Text>
			// </View>		
			<MainStack />
    );
	}
	
}
export default registerRootComponent(App); 