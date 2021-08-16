import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    // let dialogsElements = [
    //     <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>,
    //     <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>,
    //     <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
    // ]

    // let dialog =
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