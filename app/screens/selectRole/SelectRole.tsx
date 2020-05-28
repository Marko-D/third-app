import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

interface SelectRoleProps {

}

export const SelectRole: React.FC<SelectRoleProps> = ({navigation}:any) => {
    const handlePress = () => {
      navigation.navigate("Login");
    };
    return (
      <View style={styles.container}>
			<Text>Open up App.tsx to start working on your app!</Text>
			<Button title="Go to Login" onPress={handlePress} />
		</View>
    );
}

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
