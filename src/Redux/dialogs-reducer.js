const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {
            id: '1',
            name: 'Andrei',
            surname: 'Kihtan',
            img: 'https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMTAxMjM2NHx8ZW58MHx8fHw%3D&w=1000&q=80'
        },
        {
            id: '2',
            name: 'Dima',
            surname: 'Bodianych',
            img: 'https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Ff04b52da-12f2-449f-b90c-5e4d5e2b1469_361x361.png'
        },
        {
            id: '3',
            name: 'Maria',
            surname: 'Nestor',
            img: 'https://images.pexels.com/photos/3764152/pexels-photo-3764152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            id: '4',
            name: 'Sveta',
            surname: 'Kachmar',
            img: 'https://mobirise.com/bootstrap-template/profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg'
        },
        {
            id: '5',
            name: 'Olha',
            surname: 'Zahadrevych',
            img: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            id: '6',
            name: 'Katya',
            surname: 'Micyk',
            img: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }
    ],
    messages: [
        {
            id: '1',
            message: 'Hi',
            authorId: '0'
        },
        {
            id: '2',
            message: 'How are you?',
            authorId: '1',
            name: 'Andrei',
            img: 'https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMTAxMjM2NHx8ZW58MHx8fHw%3D&w=1000&q=80'
        },
        {id: '3', message: 'What`s up', authorId: '0'},
        {
            id: '4',
            message: 'Yo',
            authorId: '1',
            name: 'Andrei',
            img: 'https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMTAxMjM2NHx8ZW58MHx8fHw%3D&w=1000&q=80'
        },
        {
            id: '5',
            message: 'What about weather?',
            authorId: '0'
        },
        {
            id: '6',
            message: 'I know nothing about weather',
            authorId: '1',
            name: 'Andrei',
            img: 'https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMTAxMjM2NHx8ZW58MHx8fHw%3D&w=1000&q=80'
        },
        {
            id: '7',
            message: 'That`s sad',
            authorId: '0'
        }
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state};

            stateCopy.newMessageBody = action.text;
            return stateCopy;
        };
        case SEND_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];

            let lastId = stateCopy.messages.length
            let newMessage = {
                id: (++lastId).toString(),
                message: stateCopy.newMessageBody,
                authorId: '0'
            };
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageBody = "";
            return stateCopy;
            };
        default:
            return state;
    }

};

export const updateNewMessageBodyActionCreator = (value) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, text: value});

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export default dialogsReducer