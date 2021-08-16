import classes from "./Message.module.css";

const Message = (props) => {

    return (
        <div className={`${classes.message} ${props.currentUser.id === props.message.authorId ? classes.rightMessage : classes.message}`}>
            <div className={classes.userAvatar}>
                <img src={props.currentUser.id === props.message.authorId ? props.currentUser.img : props.message.img} alt="Avatar"/>
            </div>
            <div className={classes.messageText}>
                {props.message.message}
            </div>
        </div>

        // <div className={classes.message}>{props.message}</div>

    )
}

export default Message