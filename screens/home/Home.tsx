import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({ navigation }: any) => {
	const handlePress = () => {
		navigation.navigate("About");
	};

	return (
		<View style={styles.container}>
			<Image style={styles.logo} source={require("../../assets/icon.png")} />
			<Text>Open up App.tsx to start working on your app!</Text>
			<Button title="Go to About" onPress={handlePress} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		height: 128,
		width: 128,
		marginBottom: 30,
	},
});
