import { ActionTypes } from "../actions/ActionTypes";

const initialUserData = { id: null, name: null, title: null };

const initialState = {
  firebaseAuth: null,
  data: initialUserData,
  isLoading: false,

  signUpSuccess: false,
  signUpError: null,
  loginError: null,

  resetPasswordLoading: false,
  resetPasswordResult: null,
  resetPasswordError: null
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FIREBASE_AUTH_ACTIVE:
      return {
        ...state,
        firebaseAuth: "ACTIVE",
        data: Object.assign({}, state.data, action.activeUser)
      };
    case ActionTypes.FIREBASE_AUTH_INACTIVE:
      return { ...initialState, firebaseAuth: "INACTIVE" };
    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        loginError: null
      };
    case ActionTypes.SIGN_UP_REQUEST:
      return {
        ...state,
        isLoading: true,
        signUpError: null,
        signUpSuccess: false
      };
    case ActionTypes.SIGN_UP_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: Object.assign({}, state.data, action.activeUser),
        signUpSuccess: true
      };
    case ActionTypes.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: Object.assign({}, state.data, action.activeUser)
      };
    case ActionTypes.LOGIN_REQUEST_FAILURE:
      return { ...state, isLoading: false, loginError: action.error };
    case ActionTypes.SIGN_UP_REQUEST_FAILURE:
      return { ...state, isLoading: false, signUpError: action.error };
    case ActionTypes.SET_ACTIVE_USER_TITLE:
      return { ...state, data: { ...state.data, title: action.title } };
    case ActionTypes.PASSWORD_RESET_REQUEST_LOADING:
      return {
        ...state,
        resetPasswordLoading: true,
        resetPasswordResult: null,
        resetPasswordError: null
      };
    case ActionTypes.PASSWORD_RESET_REQUEST_SUCCESS:
      return {
        ...state,
        resetPasswordLoading: false,
        resetPasswordResult: action.email
      };
    case ActionTypes.PASSWORD_RESET_REQUEST_FAILURE:
      return {
        ...state,
        resetPasswordLoading: false,
        resetPasswordError: action.error
      };
    default:
      return state;
  }
};
