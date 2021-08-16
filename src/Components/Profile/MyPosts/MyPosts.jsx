import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post state={props.state} message={p.message} likesCount={p.likesCount}/>)

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
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts