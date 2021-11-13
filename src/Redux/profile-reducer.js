import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";

let initialState = {
    posts: [
        {id: "1", message: "Hi, how are you?", likesCount: 4},
        {id: "2", message: "This is my first post", likesCount: 199},
        {id: "3", message: "What`s up", likesCount: 13},
        {id: "4", message: "Yo", likesCount: 1},
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let lastId = state.posts.length;
            let newPost = {
                id: (++lastId).toString(),
                message: action.postBody,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default: {
            return state;
        }
    }
};

export const addPostActionCreator = (postBody) => ({type: ADD_POST, postBody});
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
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
