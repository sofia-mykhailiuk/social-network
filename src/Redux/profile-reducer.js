const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_VALUE = 'UPDATE-NEW-POST-VALUE';

const profileReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_VALUE:
            state.postValue = action.text;
            return state;
        case ADD_POST:
            let lastId = state.posts.length;
            let newPost = {
                id: (++lastId).toString(),
                message: state.postValue,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.postValue = '';
            return state;
        default: return state;
    }

};

export const updateNewPostValueActionCreator = (newValue) =>
    ({type: UPDATE_NEW_POST_VALUE, text: newValue});

export const addPostActionCreator = () => ({type: ADD_POST});

export default profileReducer