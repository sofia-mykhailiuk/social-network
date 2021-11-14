import {getAuth} from "./auth-reducer";

const SET_INITIALIZED = "SET-INITIALIZED"

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {...state, initialized: true}
        }
        default: {
            return state
        }
    }
}

export const initializedSuccess = () => ({type: SET_INITIALIZED});

/*
export const initializeApp = () =>  (dispatch) => {
    //getAuth return promise
    dispatch(getAuth()).then(()=>{
        dispatch(initializedSuccess())
    })
    // if we have more than 1 promise, all promises in array
    // Promise.all([promise].then(()=>{})
}
*/
export const initializeApp = () => async (dispatch) => {
    await dispatch(getAuth())
    dispatch(initializedSuccess())
}
export default appReducer