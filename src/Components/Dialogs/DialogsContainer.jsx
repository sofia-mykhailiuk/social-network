import Dialogs from "./Dialogs";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../Redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
