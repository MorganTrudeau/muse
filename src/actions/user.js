import { ActionTypes } from "./ActionTypes";

export const loginRequest = userInfo => {
  return { type: ActionTypes.LOGIN_REQUEST, userInfo };
};

export const loginSuccess = activeUser => {
  return {
    type: ActionTypes.LOGIN_REQUEST_SUCCESS,
    activeUser: activeUser
  };
};

export const loginFailure = error => {
  return {
    type: ActionTypes.LOGIN_REQUEST_FAILURE,
    error
  };
};

export const signUpRequest = userInfo => {
  return { type: ActionTypes.SIGN_UP_REQUEST, userInfo };
};

export const signUpSuccess = activeUser => {
  return { type: ActionTypes.SIGN_UP_REQUEST_SUCCESS, activeUser };
};

export const signUpFailure = error => {
  return { type: ActionTypes.SIGN_UP_REQUEST_FAILURE, error };
};

export const logoutRequest = () => {
  return {
    type: ActionTypes.LOGOUT_REQUEST
  };
};

export const firebaseAuthActive = activeUser => {
  return { type: ActionTypes.FIREBASE_AUTH_ACTIVE, activeUser };
};

export const firebaseAuthInactive = () => {
  return { type: ActionTypes.FIREBASE_AUTH_INACTIVE };
};

export const setActiveUserTitle = title => {
  return {
    type: ActionTypes.SET_ACTIVE_USER_TITLE,
    title: title
  };
};

export const passwordResetLoading = email => {
  return {
    type: ActionTypes.PASSWORD_RESET_REQUEST_LOADING,
    email
  };
};

export const passwordResetSuccess = email => {
  return {
    type: ActionTypes.PASSWORD_RESET_REQUEST_SUCCESS,
    email
  };
};

export const passwordResetFailure = error => {
  return {
    type: ActionTypes.PASSWORD_RESET_REQUEST_FAILURE,
    error
  };
};
