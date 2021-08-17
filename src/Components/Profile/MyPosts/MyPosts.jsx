import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {updateNewPostText} from "../../../Redux/state";


const MyPosts = (props) => {
    let postsElement = props.state.posts.map(p => <Post state={props.currentUser} message={p.message} likesCount={p.likesCount}/>)

    let onChangeValue = (event) => {
        let newValue = event.target.value;
        props.updateNewPostValue(newValue)
    }

    let addPost = () => {
        props.addPost();
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangeValue} cols="100" rows="3" value={props.state.postValue}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts