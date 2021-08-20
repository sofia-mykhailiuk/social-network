import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    // debugger;
    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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
                {/*<Post message='Hi, how are you?' likesCount='4'/>*/}

                {/*<Post message={posts[0].message} likesCount={posts[0].likesCount}/>
                <Post message={posts[1].message} likesCount={posts[1].likesCount}/>
                <Post message={posts[2].message} likesCount={posts[1].likesCount}/>
                <Post message={posts[3].message} likesCount={posts[1].likesCount}/>*/}

                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts