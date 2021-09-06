import classes from './Dialogs.module.css'
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
    let value = event.target.value;
    props.updateNewMessageBody(value);
  };

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  return (
    <div className={classes.back}>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>{dialogsElements}</div>

        <div className={classes.dialog}>
          <div className={classes.messages}>{messagesElement}</div>

          <div className={classes.addMessage}>
            <div className={classes.messageInput}>
              <textarea
                placeholder="Click here to start typing..."
                onChange={onNewMessageChange}
                value={props.dialogsPage.newMessageBody}
              >

              </textarea>
            </div>
            <div className={classes.sendButton}>
              <button onClick={onSendMessageClick}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs