import * as React from "react";
import {
	Text,
	TextInput,
	View,
	Image,
	StyleSheet,
	TouchableOpacity,
	ImageBackground,
} from "react-native";
import Constants from "expo-constants";
import {Colors, Typography} from '../../styles/index';

interface LoginProps {}

export const Login: React.FC<LoginProps> = ({ navigation }: any) => {
	const [value, onChangeText] = React.useState("Useless Placeholder");

	const handlePress = () => {
		navigation.navigate("Register");
	};

	return (
		<ImageBackground
			source={require("../../assets/images/bg.jpg")}
			style={styles.container}
		>
			<View>
				<Image style={styles.logo} source={require("../../assets/images/logo.png")} />

				<Text style={styles.paragraph}>Login</Text>

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
				<TouchableOpacity style={styles.btnLink} onPress={handlePress}>
					<Text style={styles.btnLinkTxt}>Register</Text>
				</TouchableOpacity>
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		paddingTop: Constants.statusBarHeight,
		backgroundColor: "#6a4c93",
		paddingVertical: 40,
		paddingHorizontal: 50,
	},
	paragraph: {
		marginVertical: 15,
		fontSize: 28,
		fontFamily: Typography.FONT_FAMILY_BOLD,
		color: "#fff",
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
		backgroundColor: Colors.PRIMARY,
		paddingHorizontal: 10,
		paddingVertical: 5,
    borderRadius: 5,
    height: 40,
    // width: "50%",
    // alignSelf: "center"
	},
	btnLink: {
		paddingHorizontal: 10,
		marginTop: 15,
    borderRadius: 5,
    height: 40,
	},
	input: {
		height: 40,
		backgroundColor: "#fff",
		borderColor: "#dbe0e2",
		borderWidth: 1,
		paddingHorizontal: 20,
		paddingVertical: 5,
		borderRadius: 5,
		marginBottom: 15,
		color: "#666",
	},
	logo: {
		display: "flex",
		justifyContent: "center",
		alignSelf: "center",
		marginBottom: 20,
	},
});
