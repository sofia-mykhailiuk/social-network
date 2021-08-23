const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.text;
            return state;
        case SEND_MESSAGE:
            let lastId = state.messages.length
            let newMessage = {
                id: (++lastId).toString(),
                message: state.newMessageBody,
                authorId: '0'
            };
            state.messages.push(newMessage);
            state.newMessageBody = '';
            return state;
        default: return state;
    }

};

export const updateNewMessageBodyActionCreator = (value) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, text: value});

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export default dialogsReducer