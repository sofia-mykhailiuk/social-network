import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {NavLink} from "react-router-dom";
import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../Redux/state";

const Dialogs = (props) => {
    let state = props.store.getState().messagesPage
    let currentUser = props.store.getState().currentUser

    let dialogsElements = state.dialogs.map(d => <DialogItem state={d}/>)
    let messagesElement = state.messages.map(m => <Message message={m}
                                                           currentUser={currentUser}/>).reverse()

    let onNewMessageChange = (event) => {
        let value = event.target.value
        let action = updateNewMessageBodyActionCreator(value)
        props.store.dispatch(action)
    }

    let onSendMessageClick = () => {
        let action = sendMessageActionCreator();
        props.store.dispatch(action)
    }

    return (
        <div className={classes.back}>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>

                <div className={classes.dialog}>
                    <div className={classes.messages}>
                        {messagesElement}
                    </div>

                    <div className={classes.addMessage}>
                        <div className={classes.messageInput}>
                            <textarea placeholder='Click here to start typing...' onChange={onNewMessageChange}
                                      value={state.newMessageBody}>
                            </textarea>
                        </div>
                        <div className={classes.sendButton}>
                            <button onClick={onSendMessageClick}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs