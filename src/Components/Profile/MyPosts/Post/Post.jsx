import classes from './Post.module.css'

const Post = () => {
    return (
        <div className={classes.item}>
            <img src="https://gloryimage.b-cdn.net/images/team/avatar_user_36692_1511968805.jpg" alt=""/>
            Post
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}

export default Post