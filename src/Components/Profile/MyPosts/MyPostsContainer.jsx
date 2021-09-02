import React from "react";
import {addPostActionCreator, updateNewPostValueActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState()

    let onChangeNewPostValue = (value) => {
        let action = updateNewPostValueActionCreator(value)
        props.store.dispatch(action);
    };

    let addPost = () => {
        let action = addPostActionCreator()
        props.store.dispatch(action);
    };

    return (<MyPosts updateNewPostValue={onChangeNewPostValue}
                     addPost={addPost}
                     posts={state.profilePage.posts}
                     postValue={state.profilePage.postValue}
                     currentUser={state.currentUser}
    />);
}

export default MyPostsContainer