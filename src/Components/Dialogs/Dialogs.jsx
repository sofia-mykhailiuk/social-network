import './Dialogs.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Field, reduxForm, reset} from "redux-form";
import {Textarea} from "../common/FormControls/Textarea";
import {maxLengthCreator, required} from "../../utils/validators";

const maxLength30 = maxLengthCreator(30)

const AddMessageForm = (props) => {
    return (
        <form className="new-message-wrapper shadowCard" onSubmit={props.handleSubmit}>
            <div className="custom-textarea ">
                <Field
                    name='newMessage'
                    component={Textarea}
                    placeholder="Click here to start typing..."
                    validate={[required, maxLength30]}
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

    let onSendMessage = (formData, dispatch) => {
        props.sendMessage(formData.newMessage)
        dispatch(reset('add-message-form'))
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