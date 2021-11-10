import "./MyPosts.css";
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className='new-post-wrapper shadowCard'>
            <div className="custom-textarea">
                      <Field name='newPostBody' component='textarea' placeholder='Click here to start typing...'/>
            </div>
            <div className='custom-button'>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({
    form: 'newPost'
})(AddNewPostForm)

const MyPosts = (props) => {
    let postsElement = props.posts.map((p) => (
        <Post
            state={props.currentUser}
            message={p.message}
            likesCount={p.likesCount}
            key={p.id}
        />
    ));

    const onAddPost = (formData) => {
        props.addPost(formData.newPostBody)
    }
    return (
        <div className="postsBlock">
            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit={onAddPost}/>
            <div className="posts">{postsElement}</div>
        </div>
    );
};

export default MyPosts;
