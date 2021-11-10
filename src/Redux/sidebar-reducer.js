const SET_FRIENDS = 'SET-FRIENDS';

let initialState = {
    friends: []
}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FRIENDS: {
            return {...state, friends: [...state.friends, ...action.friends]}
        }
    }

    return state;
}
export const setFriendsAC = (friends) => ({type: SET_FRIENDS, friends: friends})
export default sidebarReducer