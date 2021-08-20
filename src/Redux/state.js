const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_VALUE = 'UPDATE-NEW-POST-VALUE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        currentUser: {
            id: '0',
            name: 'Sofia',
            surname: 'Mykhailiuk',
            img: 'https://avatars.githubusercontent.com/u/88670730?v=4'
        },
        profilePage: {
            postValue: '',
            posts: [
                {id: '1', message: 'Hi, how are you?', likesCount: 4},
                {id: '2', message: 'This is my first post', likesCount: 199},
                {id: '3', message: 'What`s up', likesCount: 13},
                {id: '4', message: 'Yo', likesCount: 1}
            ]
        },
        messagesPage: {
            dialogs: [
                {
                    id: '1',
                    name: 'Andrei',
                    surname: 'Kihtan',
                    img: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png'
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
                    img: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png'
                },
                {id: '3', message: 'What`s up', authorId: '0'},
                {
                    id: '4',
                    message: 'Yo',
                    authorId: '1',
                    name: 'Andrei',
                    img: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png'
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
                    img: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png'
                },
                {
                    id: '7',
                    message: 'That`s sad',
                    authorId: '0'
                }
            ],
            newMessageBody: ''
        },
        sidebar: {
            friends: [
                {
                    id: '1',
                    name: 'Andrei',
                    surname: 'Kihtan',
                    img: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png'
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
            ]
        }
    },
    _callSubscriber() {
        this.getSubscriber();
    },

    subscribe(observer) {
        this._callSubscriber = observer; // наглядач // observer // publisher-subscriber
    },
    getState() {
        return this._state
    },

    dispatch(action) { // { type: 'ADD-POST' }
        if (action.type === UPDATE_NEW_POST_VALUE) {
            this._state.profilePage.postValue = action.text;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_POST) {
            let lastId = this._state.profilePage.posts.length;

            let newPost = {
                id: (++lastId).toString(),
                message: this._state.profilePage.postValue,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.postValue = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.text;
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {

            let lastId = this._state.messagesPage.messages.length

            let newMessage = {
                id: (++lastId).toString(),
                message: this._state.messagesPage.newMessageBody,
                authorId: '0'
            };

            this._state.messagesPage.messages.push(newMessage);
            this._state.messagesPage.newMessageBody = '';
            this._callSubscriber(this._state)
        }
    }
};
export default store
window.store = store;

export const updateNewPostValueActionCreator = (newValue) =>
    ({type: UPDATE_NEW_POST_VALUE, text: newValue});

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewMessageBodyActionCreator = (value) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, text: value});

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
