import * as React from "react";
import {
	Text,
	TextInput,
	View,
	Image,
	TouchableOpacity,
	ImageBackground,
	SafeAreaView
} from "react-native";
import API from "../../config/env";
import styles from './Login.component.style';


interface LoginViewComponentProps {
  navigateToRegister: any,
  login: any,
  title: any
}

export const LoginViewComponent: React.FC<LoginViewComponentProps> = (props: any) => {
  const [value, onChangeText] = React.useState("Useless Placeholder");
	return (
		<ImageBackground
			source={require("../../assets/images/bg.jpg")}
			style={styles.container}
		>
			<SafeAreaView>
				<Image
					style={styles.logo}
					source={require("../../assets/images/logo.png")}
				/>

				<Text style={styles.paragraph}>Login {props.title} {API.admin}</Text>

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
				<TouchableOpacity style={styles.btnPrimary} onPress={props.login}>
					<Text style={styles.btnPrimaryTxt}>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btnLink}
					// onPress={handlePress}
				>
					<Text style={styles.btnLinkTxt} onPress={props.navigateToRegister}>Register</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</ImageBackground>
	);
};
