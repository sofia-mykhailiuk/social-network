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
    // let a = {
    //     id: '1',
    //     name: 'Andrei'
    // }
    //
    // let d = {
    //     id: '2',
    //     name: 'Dimych'
    // }

    let dialogs = [
        {id: '1', name: 'Andrei'},
        {id: '2', name: 'Dimych'},
        {id: '3', name: 'Maria'},
        {id: '4', name: 'Sveta'},
        {id: '5', name: 'Olha'},
        {id: '6', name: 'Katya'},
    ]

    // let dialogsElements = [
    //     <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>,
    //     <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>,
    //     <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
    // ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messages = [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'What`s up'},
        {id: '4', message: 'Yo'}
    ]

    let messagesElement = messages.map(m => <Message message={m.message}/>)

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