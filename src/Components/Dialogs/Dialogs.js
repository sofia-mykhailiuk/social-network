import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {/*<div className={classes.dialog + ' ' + classes.active}>*/}
                {/*    <NavLink to='/dialogs/1'>Sofia</NavLink>*/}
                {/*</div>*/}
                <DialogItem name='Maria' id='2'/>
                <DialogItem name='Andrei' id='3'/>
                <DialogItem name='Maria' id='4'/>
                <DialogItem name='Sasha' id='5'/>

            </div>
            <div className={classes.messages}>
                <Message message='Hi'></Message>
                <Message message='How are you?'></Message>
                <Message message='What`s up'></Message>
                <Message message='Yo'></Message>

            </div>
        </div>
    )
}

export default Dialogs