let state = {
    currentUser: {
        id: '0',
        name: 'Sofia',
        surname: 'Mykhailiuk',
        img: 'https://avatars.githubusercontent.com/u/88670730?v=4'
    },
    profilePage: {
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
            {id: '1', message: 'Hi', authorId: '0'},
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
            }
        ]
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

}
export default state