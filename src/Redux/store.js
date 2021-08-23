import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        currentUser: {
            id: '0',
            name: 'Sofia',
            surname: 'Mykhailiuk',
            img: 'https://avatars.githubusercontent.com/u/88670730?v=4'
        },
        profilePage: {

        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
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
            ]
        }
    },
    _callSubscriber() {
        // this.getSubscriber()
        console.log(this)
    },

    subscribe(observer) {
        this._callSubscriber = observer; // наглядач // observer // publisher-subscriber
    },
    getState() {
          return this._state
    },

    dispatch(action) { // { type: 'ADD-POST' }
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state)
    }

};

export default store
window.store = store;
