import React from "react";
import {
  addPostActionCreator,
  updateNewPostValueActionCreator,
} from "../../../Redux/profile-reducer";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let onChangeNewPostValue = (value) => {
          let action = updateNewPostValueActionCreator(value);
          store.dispatch(action);
        };

        let addPost = () => {
          let action = addPostActionCreator();
          store.dispatch(action);
        };

        return (
          <MyPosts
            updateNewPostValue={onChangeNewPostValue}
            addPost={addPost}
            posts={state.profilePage.posts}
            postValue={state.profilePage.postValue}
            currentUser={state.currentUser}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
