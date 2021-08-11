import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    // debugger;
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="100" rows="3">New post</textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message='Hi, how are you?' likesCount='4'/>
                <Post message='This is my first post' likesCount='199'/>
            </div>
        </div>
    );
}

export default MyPosts