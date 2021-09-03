import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
  let postsElement = props.posts.map((p) => (
    <Post
      state={props.currentUser}
      message={p.message}
      likesCount={p.likesCount}
    />
  ));

  let onChangeNewPostValue = (event) => {
    let newValue = event.target.value;
    props.updateNewPostValue(newValue);
  };

  let onAddPost = () => {
    props.addPost();
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onChangeNewPostValue}
            value={props.postValue}>
          </textarea>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
