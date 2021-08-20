import classes from './Post.module.css'

const Post = (props) => {
    // console.log(props)
    // console.log(props.message)
    return (
        <div className={classes.item}>
            <img src="https://gloryimage.b-cdn.net/images/team/avatar_user_36692_1511968805.jpg" alt=""/>
            <span>{props.message}</span>
            <div>
                <span>{[props.likesCount]} Like</span>
            </div>
        </div>
    );
}

export default Post