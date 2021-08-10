import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea name="" id="" cols="100" rows="3">New post</textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
}

export default MyPosts