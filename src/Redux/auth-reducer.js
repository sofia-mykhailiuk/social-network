const SET_USER_DATA = "SET-USER-DATA"
const SET_CURRENT_USER = "SET-CURRENT-USER"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    currentUser: {
        id: '0',
        name: 'Sofia',
        photos: {
            small: 'https://avatars.githubusercontent.com/u/88670730?v=4',
            large: null
        }
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.data, isAuth: true}
        }
        case SET_CURRENT_USER: {
            return {...state, currentUser: action.user}
        }
        default: {
            return state
        }
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})
export const setCurrentUser = (user) => ({type: SET_CURRENT_USER, user})

export default authReducer