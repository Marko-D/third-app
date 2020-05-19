import * as React from "react";
import {
	Text,
	TextInput,
	View,
	Image,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";

interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
	const [value, onChangeText] = React.useState("Useless Placeholder");

	return (
		<View style={styles.container}>
			<View style={styles.container}>
				<Image style={styles.logo} source={require("../../assets/icon.png")} />
			</View>

			<View style={styles.paragraph}>
				<Text>Login</Text>
			</View>
			<TextInput
				style={styles.input}
				onChangeText={(text) => onChangeText(text)}
				value={value}
			/>
			<TextInput
				style={styles.input}
				onChangeText={(text) => onChangeText(text)}
				value={value}
			/>
			<TouchableOpacity style={styles.btnPrimary} onPress={() => {}}>
				<Text style={styles.btnPrimaryTxt}>Login</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.btnLink} onPress={() => {}}>
				<Text style={styles.btnLinkTxt}>Forgot Password</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		paddingTop: Constants.statusBarHeight,
		backgroundColor: "#ecf0f1",
		padding: 40,
	},
	paragraph: {
		marginVertical: 15,
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
		textTransform: "uppercase",
	},
	btnPrimaryTxt: {
		fontSize: 16,
		fontWeight: "400",
		color: "#fff",
		textAlign: "center",
	},
	btnLinkTxt: {
		fontSize: 14,
		fontWeight: "500",
		color: "#666",
		textAlign: "center",
	},
	btnPrimary: {
		backgroundColor: "#007aff",
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 5,
	},
	btnLink: {
		paddingHorizontal: 10,
		marginTop: 15,
		borderRadius: 5,
	},
	input: {
		height: 35,
		backgroundColor: "#fff",
		borderColor: "#dbe0e2",
		borderWidth: 1,
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 5,
		marginBottom: 15,
		color: "#666",
	},
	logo: {
		height: 60,
	},
});
