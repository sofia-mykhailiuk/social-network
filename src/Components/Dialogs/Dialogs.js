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

    let dialogsData = [
        {id: '1', name: 'Andrei'},
        {id: '2', name: 'Dimych'},
        {id: '3', name: 'Maria'},
        {id: '4', name: 'Sveta'},
        {id: '5', name: 'Olha'},
        {id: '6', name: 'Katya'},
    ]

    let dialogsElements = [
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>,
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>,
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
    ]

    let messagesData = [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'What`s up'},
        {id: '4', message: 'Yo'}
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}

                {/*<div className={classes.dialog + ' ' + classes.active}>*/}
                {/*    <NavLink to='/dialogs/1'>Sofia</NavLink>*/}
                {/*</div>*/}

                {/*<DialogItem name='Maria' id='2'/>*/}

                {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>*/}

            </div>
            <div className={classes.messages}>
                {/*<Message message='Hi'></Message>*/}
                {/*<Message message={messagesData[0].message}></Message>
                <Message message={messagesData[1].message}></Message>
                <Message message={messagesData[2].message}></Message>*/}


            </div>
        </div>
    )
}

export default Dialogs