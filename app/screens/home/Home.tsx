import React, {useContext, useEffect, useState} from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { AuthContext } from "../../core/auth/context/AuthContext";
import { AsyncStorageService } from "../../core/services/AsyncStorageService";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({ navigation }: any) => {
	const {state, setState} = useContext<any>(AuthContext);
	const [token, setToken] = useState<any>('');
	const [clearAsync, setClearAsync] = useState(token)
	
	const handlePress = () => {
		navigation.navigate("About");
	};

	const handleLogout = () => {
		setState(false)
	};

	const getAsyncStorage = async () => {
		let token = await AsyncStorageService.getItem('token');
		console.log("token", token);
		
		setToken(token)
	}

	const clearStorage = async () => {
		await AsyncStorageService.clearAll()
		setToken(token)
	}

	const handleClearAsync = async () => {
		clearStorage()
	}

	useEffect(() => {
		console.log("Home component did mount");
		getAsyncStorage()
	}, []);


	return (
			<View style={styles.container}>
			<Text style={styles.text}>TOKEN</Text>
			<Text style={styles.token}>{token}</Text>
			<Button title="Go to About" onPress={handlePress} />
			<Button title="Clear AsyncStorage" onPress={handleClearAsync} />
			<Button title="Logout" onPress={handleLogout} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"	
	},
	logo: {
		height: 128,
		width: 128,
		marginBottom: 30,
	},
	text: {
		fontFamily: 'Nunito-Bold', 
		fontSize: 30 
	},
	token: {
		margin: 20,
		padding: 20,
		backgroundColor: '#e4e4e4',
		borderColor: '#999',
		borderWidth: 1
	}
});
