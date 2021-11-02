import './Dialogs.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Field, reduxForm} from "redux-form";

const AddMessageForm = (props) => {
    return (
        <form className="addMessage shadowCard" onSubmit={props.handleSubmit}>
            <div className="custom-textarea ">
                <Field
                    name='newMessage'
                    component='textarea'
                    placeholder="Click here to start typing..."
                />
            </div>
            <div className='custom-button'>
                <button type='submit'>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({
    form: 'add-message-form'
})(AddMessageForm)

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map((d) => (
        <DialogItem state={d} key={d.id}/>
    ));

    let messagesElement = props.dialogsPage.messages
        .map((m) => <Message message={m} currentUser={props.currentUser} key={m.id}/>)
        .reverse();

    let onSendMessage = (formData) => {
        props.sendMessage(formData.newMessage)
    }

    return (
        <div className="dialogs">
            <div className="dialogsItems">{dialogsElements}</div>

            <div className="dialog">
                <div className="messages">{messagesElement}</div>
                <AddMessageReduxForm dialogsPage={props.dialogsPage}
                                     onSubmit={onSendMessage}/>
            </div>
        </div>
    );
};

export default Dialogs