const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_VALUE = "UPDATE-NEW-POST-VALUE";

let initialState = {
  postValue: "",
  posts: [
    { id: "1", message: "Hi, how are you?", likesCount: 4 },
    { id: "2", message: "This is my first post", likesCount: 199 },
    { id: "3", message: "What`s up", likesCount: 13 },
    { id: "4", message: "Yo", likesCount: 1 },
  ],
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
    default: {
      return state;
    }
  }
};

export const updateNewPostValueActionCreator = (newValue) => ({
  type: UPDATE_NEW_POST_VALUE,
  text: newValue,
});

export const addPostActionCreator = () => ({ type: ADD_POST });

export default profileReducer;
