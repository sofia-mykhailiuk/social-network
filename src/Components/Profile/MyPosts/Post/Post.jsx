import './Post.css'

const Post = (props) => {

    return (
        <div className="postItem shadowCard">
            <div className="post">
                <img src={props.state.img} alt=""/>
                <span>{props.message}</span>
            </div>
            <div>
                <span>{props.likesCount} Likes</span>
            </div>
        </div>
    );
}

export default Post