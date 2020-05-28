import React, { useContext }  from "react";
import axios from "axios";

import API from "../../config/env";
import AuthService from "../../core/auth/AuthService";
import { LoginViewComponent } from "./Login.component";
import { AuthContext  } from "../../core/auth/context/AuthContext";
import { AsyncStorageService } from "../../core/services/AsyncStorageService";
import AuthHeader from "../../core/auth/AuthHeader";
// import AsyncStorage from '@react-native-community/async-storage';

interface LoginProps {}
// interface User {
// 	username: string;
// 	password: string;
// }
// interface OptionsData {
// 	method: any;
// 	url: string;
// 	data: User;
// }
export const Login: React.FC<LoginProps> = ({ navigation }: any) => {
	const {state, setState} = useContext<any>(AuthContext);

	const navRegister = () => {
		navigation.navigate("Register");
	};

	const handleLogin = () => {
		let data = {
			password: "P@ssw0rd",
			username: "zorica.jankuloska@it-labs.com",
		};

		AuthService.login(data).then((response) => {
			// console.log("AuthService.login-----------", response.data);
			if (response.data.token) {
				// AsyncStorageService.setItem("token", response.data.token);

				let roles = response.data.payload.roles;
				if (roles.length <= 0) {
					// console.log("ima eden useraaaaaaaaaaaaa");
				} else {
					// console.log("ima poise useriiiiiiiiiiii");
					// navigation.navigate("SelectRole");
					let participantRole = roles.find(
						(role) => role.name === "Participant"
					);
					setState(true)
					console.log('---------------------state', state)
					// console.log("participantRole-------------------", participantRole);
					// console.log("AuthHeader-------------------", AuthHeader());
					me(response.data.token);
				}
			}
		});
	};

	 const me = async (token: string) => {
		//  console.log('API.loginaaaaaaaaaaaaaaaa',`${API.login}me`)
		let headers = {
			"Authorization": `JWT ${token}`,
			"Accept": "application/json, text/plain, */*",
			"Content-Type": "application/json; charset=utf-8"
		};
		axios.get(`${API.login}me`, {headers}).then(res => {
			// navigation.navigate("Home");
			
			console.log("auth/me-------------------", res);
			// console.log("ME res.data.payload +++++++------------------", res.data.payload);
			selectedRole(res.data.payload.id, token)
		})
		.catch((error) => {
			// console.log("auth/me error", JSON.stringify(error));
		});
	}

	const selectedRole = (userId: string, token: string) => {
		// console.log('aaaaaaaaaaaaaaaaaaaaaaaaa',token)
		let headers = {
			"Authorization": `JWT ${token}`,
			"Accept": "application/json, text/plain, */*",
			"Content-Type": "application/json; charset=utf-8"
		};
		let data = {
			roleId: "84768ee0-4695-41ae-a83b-7d32248eff57",
			associateType: null
		}
		// console.log("${API.admin}users/${userId}/selectedRole", `${API.admin}users/${userId}/selectedRole`);

		// axios.post(Helper.getUserAPI(), data, {
		// 	headers: headers
		// })


		axios.post(`${API.admin}users/${userId}/selectedRole`, data, {headers}).then(async (response) => {
			AsyncStorageService.setItem("token", response.data.payload.token);

			
			// navigation.navigate("Home");
			// console.log("selectedRole-------------------", response);
			
			// AsyncStorage.getAllKeys((err, keys) => {
			// 	AsyncStorage.multiGet(keys, (error, stores) => {
			// 		stores.map((result, i, store) => {
			// 			console.log('---------------',{ [store[i][0]]: store[i][1] });
			// 			return true;
			// 		});
			// 	});
			// });
			
			// console.log("AsyncStorage-------------------", await AsyncStorageService.getItem('token'));

			// ConnectionGroupInfo(userId, response.data.payload.token)
		})
		.catch((error) => {
			console.log("selectedRole error", JSON.stringify(error));
		});
	}

	const ConnectionGroupInfo = (userid: string, token: string) => {
		let headers = {
			"Authorization": `JWT ${token}`,
			"Accept": "application/json, text/plain, */*",
			"Content-Type": "application/json; charset=utf-8"
		};
		// console.log('token+++++++++++++++++++++++++',token)
		axios.get(`${API.admin}dashboard/${userid}/connectionGroupInfo`, {headers}).then(res => {
			// console.log('connectionGroupInfo+++++++++++++++++++++++++',res)
		}).catch((error) => {
			// console.log("selectedRole error", JSON.stringify(error));
		});
	}

	return (
		<LoginViewComponent title={state} login={handleLogin} navigateToRegister={navRegister} />
	);
};
