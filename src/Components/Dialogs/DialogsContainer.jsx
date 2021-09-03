import React from "react";
import Dialogs from "./Dialogs";
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../Redux/dialogs-reducer";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;
        let currentUser = store.getState().currentUser;

        let onNewMessageChange = (value) => {
          let action = updateNewMessageBodyActionCreator(value);
          store.dispatch(action);
        };

        let onSendMessageClick = () => {
          let action = sendMessageActionCreator();
          store.dispatch(action);
        };

        return (
          <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
            currentUser={currentUser}
            newMessageBody={state.newMessageBody}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
