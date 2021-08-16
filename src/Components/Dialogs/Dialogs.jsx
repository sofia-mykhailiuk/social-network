import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    debugger;
    let dialogsElements = props.state.dialogs.map(d => <DialogItem state={d}/>)
    let messagesElement = props.state.messages.map(m => <Message message={m} currentUser={props.currentUser}/>)

    return (
        <div className={classes.back}>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    {messagesElement}
                </div>
            </div>

        </div>
    )
}

export default Dialogs