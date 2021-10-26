import {
    addPostActionCreator,
    updateNewPostValueActionCreator,
} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux"

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        postValue: state.profilePage.postValue,
        currentUser: state.currentUser
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostValue: (value) => {
            dispatch(updateNewPostValueActionCreator(value));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    };
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
