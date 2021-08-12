import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    // debugger;

    let postData = [
        {id: '1', message: 'Hi, how are you?', likesCount: 4},
        {id: '2', message: 'This is my first post', likesCount: 199},
        {id: '3', message: 'What`s up'},
        {id: '4', message: 'Yo'}
    ]

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
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    );
}

export default MyPosts