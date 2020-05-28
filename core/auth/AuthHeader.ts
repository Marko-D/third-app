import { AsyncStorageService } from "../services/AsyncStorageService";

export default async function AuthHeader() {
  let token: any = await AsyncStorageService.getItem('token');
  // const user = JSON.parse(token);
  console.log('token+++++++++++++++++++++++++++++', JSON.parse(token))
  if (token) {
    return { Authorization: `JWT ${token}` };
  } else {
    return {};
  }
}


// import { authenticationService } from '@/_services';

// export function authHeader() {
//     // return authorization header with jwt token
//     const currentUser = authenticationService.currentUserValue;
//     if (currentUser && currentUser.token) {
//         return { Authorization: `Bearer ${currentUser.token}` };
//     } else {
//         return {};
//     }
// }