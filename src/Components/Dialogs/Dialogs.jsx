import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {NavLink} from "react-router-dom";
import React from "react";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem state={d}/>)
    let messagesElement = props.state.messages.map(m => <Message message={m} currentUser={props.currentUser}/>)

    let newMessageElement = React.createRef()
    let sendMessage = () => {
        let message = newMessageElement.current.value
        alert(message)
    }

    return (
        <div className={classes.back}>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    {messagesElement}
                    <div className={classes.addMessage}>
                        <div className={classes.messageInput}>
                            <textarea placeholder='Click here to start typing...' ref={newMessageElement}></textarea>
                        </div>
                        <div className={classes.sendButton}>
                            <button onClick={sendMessage}>Send</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs