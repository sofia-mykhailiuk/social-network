import {authAPI, profileAPI} from "../api/api";
import {setCurrentUser} from "./profile-reducer";

const SET_USER_DATA = "SET-USER-DATA"
const LOGIN_ERROR = "LOGIN-ERROR"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    errorMessage: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.payload}
        }
        case LOGIN_ERROR: {
            return {...state, errorMessage: action.payload}
        }
        default: {
            return state
        }
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});
export const setLoginErrorMessage = (payload) => ({type: LOGIN_ERROR, payload})

export const getAuth = () => (dispatch) => {
    authAPI.getAuth().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
            profileAPI.getProfile(id).then(data => {
                dispatch(setCurrentUser(data))
            })
        }
    })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuth())
        } else if (data.resultCode  === 1) {
            dispatch(setLoginErrorMessage(data.messages))
        } else {dispatch(setLoginErrorMessage('Please, login on website "social-network.samuraijs.com"'))}
    })
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    })
}

export default authReducer