import "./MyPosts.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    let postsElement = props.posts.map((p) => (
        <Post
            state={props.currentUser}
            message={p.message}
            likesCount={p.likesCount}
            key={p.id}
        />
    ));

    const onChangeNewPostValue = (event) => {
        props.updateNewPostValue(event.target.value);
    };

    const onAddPost = () => {
        props.addPost();
    };

    return (
        <div className="postsBlock">
            <h3>My posts</h3>
            <div className='new-post-wrapper'>
                <div className="custom-textarea">
                      <textarea
                          onChange={onChangeNewPostValue}
                          placeholder='Click here to start typing...'
                          value={props.postValue}>
                      </textarea>
                </div>
                <div className='custom-button'>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className="posts">{postsElement}</div>
        </div>
    );
};

export default MyPosts;
