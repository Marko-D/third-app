import { createContext } from "react";

export const AuthContext = createContext({});
// export const AuthContextProvider = ([children]) =>{

	
// }


// auth-service.jsx
// import React, { createContext, useContext } from 'react';
// import axios from "axios";
// import API from "../../config/env";

// const AuthContext = createContext(null);

// export const AuthProvider = (props) => {
//   const value = {
//     register: props.register || register,
//     login: props.login || login,
//   };

//   return (
//     <AuthProvider.Provider value={value}>
//       {props.children}
//     </AuthProvider.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// const login = (body) => {
// 	return axios.post(API.login, body);
// };

// const register = (body) => {
//   // ...
// };