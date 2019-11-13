import { AsyncStorage } from "react-native";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  signUpRequest,
  signUpSuccess,
  signUpFailure,
  logoutRequest,
  passwordResetLoading,
  passwordResetSuccess,
  passwordResetFailure
} from "../actions/user";
import { firebase } from "@react-native-firebase/auth";
import { loginErrorToMessage } from "../utils";

export function resetPassword(email) {
  return function(dispatch) {
    dispatch(passwordResetLoading(email));
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        dispatch(passwordResetSuccess(email));
      })
      .catch(error => {
        dispatch(passwordResetFailure(loginErrorToMessage(error.message)));
      });
  };
}

export function signUp(email, password) {
  return function(dispatch) {
    dispatch(signUpRequest({ email, password }));
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        let user = firebase.auth().currentUser;
        let activeUser = { id: user.uid };
        dispatch(signUpSuccess(activeUser));
      })
      .catch(error => {
        console.log("Sign up error", error);
        dispatch(signUpFailure(loginErrorToMessage(error)));
      });
  };
}

export function auth(email, password) {
  return function(dispatch) {
    // Authorize user in database
    dispatch(loginRequest({ email, password }));
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        let user = firebase.auth().currentUser;
        let activeUser = { id: user.uid, name: user.displayName };
        dispatch(loginSuccess(activeUser));
        return null;
      })
      .catch(error => {
        dispatch(loginFailure(loginErrorToMessage(error)));
        return loginErrorToMessage(error);
      });
  };
}

export function deAuth() {
  return function(dispatch) {
    // Logout user from database
    return firebase
      .auth()
      .signOut()
      .then(() => {
        // Update state with null user
        dispatch(logoutRequest());
      });
  };
}

export async function storeActiveUserId(id) {
  try {
    await AsyncStorage.setItem("ACTIVE_USER_ID", id);
    console.log("Active user id stored");
  } catch (error) {
    console.log("Error store active user id", error);
  }
}

export async function getActiveUserId() {
  try {
    const id = await AsyncStorage.getItem("ACTIVE_USER_ID");
    console.log("Fetched active user id: " + id);
    return id;
  } catch (error) {
    console.log("Error fetching active user id " + error);
    return null;
  }
}
