import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    // debugger;
    return (
        <div>
            My posts
            <div>
                <textarea name="" id="" cols="100" rows="3">New post</textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message='Hi, how are you?' likesCount='4'/>
                <Post message='This is my first post' likesCount='199'/>
            </div>
        </div>
    );
}

export default MyPosts