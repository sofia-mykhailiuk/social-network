import "./Message.css";


const Message = (props) => {

    return (
        <div className={`message ${props.currentUser.id === props.message.authorId ? "rightMessage" : "message"}`}>
            <div className="avatar">
                <img src={props.currentUser.id === props.message.authorId ? props.currentUser.img : props.message.img} alt="Avatar"/>
            </div>
            <div className="messageText">
                {props.message.message}
            </div>
        </div>
    )
}

export default Message