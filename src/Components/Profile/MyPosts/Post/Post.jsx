import classes from './Post.module.css'

const Post = (props) => {

    return (
        <div className={classes.item}>
            <div className={classes.post}>
                <img src={props.state.img} alt=""/>
                <span>{props.message}</span>
            </div>
            <div>
                <span>{[props.likesCount]} Like</span>
            </div>
        </div>
    );
}

export default Post