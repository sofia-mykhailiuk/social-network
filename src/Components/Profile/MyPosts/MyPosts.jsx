import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostValueActionCreator} from "../../../Redux/state";


const MyPosts = (props) => {
    let postsElement = props.state.posts.map(p => <Post state={props.currentUser}
                                                        message={p.message}
                                                        likesCount={p.likesCount}/>);

    let onChangeNewPostValue = (event) => {
        let newValue = event.target.value;
        // let action = {type: 'UPDATE-NEW-POST-VALUE', text: newValue};
        let action = updateNewPostValueActionCreator(newValue)
        props.dispatch(action);
    };

    let addPost = () => {
        let action = addPostActionCreator()
        props.dispatch(action);
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangeNewPostValue}
                              cols="100" rows="3"
                              value={props.state.postValue}>
                    </textarea>
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