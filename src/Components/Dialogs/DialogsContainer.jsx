import Dialogs from "./Dialogs";
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../Redux/dialogs-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    currentUser: state.currentUser
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (value) => {
      dispatch(updateNewMessageBodyActionCreator(value));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
