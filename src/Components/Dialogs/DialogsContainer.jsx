import React from "react";
import Dialogs from "./Dialogs";
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../Redux/dialogs-reducer";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;
  let currentUser = props.store.getState().currentUser;

  let onNewMessageChange = (value) => {
    let action = updateNewMessageBodyActionCreator(value);
    props.store.dispatch(action);
  };

  let onSendMessageClick = () => {
    let action = sendMessageActionCreator();
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogsPage={state}
      currentUser={currentUser}
    />
  );
};

export default DialogsContainer;
