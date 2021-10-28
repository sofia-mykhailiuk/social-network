import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_VALUE = "UPDATE-NEW-POST-VALUE";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_CURRENT_USER = "SET-CURRENT-USER";
const SET_USER_STATUS = "SET-USER-STATUS";
const UPDATE_USER_STATUS = "UPDATE-USER-STATUS";

let initialState = {
    postValue: "",
    posts: [
        {id: "1", message: "Hi, how are you?", likesCount: 4},
        {id: "2", message: "This is my first post", likesCount: 199},
        {id: "3", message: "What`s up", likesCount: 13},
        {id: "4", message: "Yo", likesCount: 1},
    ],
    currentUser: null,
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_VALUE: {
            return {
                ...state,
                postValue: action.text
            };
        }
        case ADD_POST: {
            let lastId = state.posts.length;
            let newPost = {
                id: (++lastId).toString(),
                message: state.postValue,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                postValue: ""
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_CURRENT_USER: {
            return {
                ...state,
                currentUser: action.profile
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case UPDATE_USER_STATUS: {

        }
        default: {
            return state;
        }
    }
};

export const updateNewPostValueActionCreator = (newValue) => ({
    type: UPDATE_NEW_POST_VALUE,
    text: newValue,
});

export const addPostActionCreator = () => ({type: ADD_POST});
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setCurrentUser = (profile) => ({type: SET_CURRENT_USER, profile})
const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data));
    });
}

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
        dispatch(setUserStatus(data))
    })
}

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(data => {
        if(data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    })
}


export default profileReducer;
