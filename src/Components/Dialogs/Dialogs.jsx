import './Dialogs.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map((d) => (
        <DialogItem state={d} key={d.id}/>
    ));

    let messagesElement = props.dialogsPage.messages
        .map((m) => <Message message={m} currentUser={props.currentUser} key={m.id}/>)
        .reverse();

    let onNewMessageChange = (event) => {
        props.updateNewMessageBody(event.target.value);
    };

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    return (
        <div className="dialogsWrapper">
            <div className="dialogs">
                <div className="dialogsItems">{dialogsElements}</div>

                <div className="dialog">
                    <div className="messages">{messagesElement}</div>

                    <div className="addMessage">
                        <div className="custom-textarea ">
                              <textarea
                                  placeholder="Click here to start typing..."
                                  onChange={onNewMessageChange}
                                  value={props.dialogsPage.newMessageBody}
                              />
                        </div>
                        <div className='custom-button'>
                            <button onClick={onSendMessageClick}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs