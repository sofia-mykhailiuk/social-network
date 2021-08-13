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
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = props.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {/*<div className={classes.dialog + ' ' + classes.active}>*/}
                {/*    <NavLink to='/dialogs/1'>Sofia</NavLink>*/}
                {/*</div>*/}

                {/*<DialogItem name='Maria' id='2'/>*/}

                {/*<DialogItem name={dialogs[0].name} id={dialogs[0].id}/>
                <DialogItem name={dialogs[1].name} id={dialogs[1].id}/>
                <DialogItem name={dialogs[2].name} id={dialogs[2].id}/>
                <DialogItem name={dialogs[3].name} id={dialogs[3].id}/>
                <DialogItem name={dialogs[4].name} id={dialogs[4].id}/>
                <DialogItem name={dialogs[5].name} id={dialogs[5].id}/>*/}

                {dialogsElements}


            </div>
            <div className={classes.messages}>
                {/*<Message message='Hi'></Message>*/}

                {/*<Message message={messages[0].message}></Message>*/}
                {/*<Message message={messages[1].message}></Message>*/}
                {/*<Message message={messages[2].message}></Message>*/}

                {messagesElement}

            </div>
        </div>
    )
}

export default Dialogs