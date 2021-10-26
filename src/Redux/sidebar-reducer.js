import {friendsAPI} from "../api/api";

const SET_FRIENDS = 'SET-FRIENDS';

let initialState = {
    friends: []
}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FRIENDS: {
            return {...state, friends: [...state.friends, ...action.friends]}
        }
        default:
            return state;
    }
}
export const setFriendsAC = (friends) => ({type: SET_FRIENDS, friends: friends});

export const setFriends = () => (dispatch) => {
    friendsAPI.setFriends().then(data =>{
        dispatch(setFriendsAC(data.items));
    })
}

export default sidebarReducer