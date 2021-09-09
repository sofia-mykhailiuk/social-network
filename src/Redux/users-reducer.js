const FOLLOW = 'FOLLOW';

let initialState = {
    users: [
        {
            id: 1,
            name: 'Andrew',
            surname: 'Kirchei',
            img: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            location: {
                city: 'Drohobych',
                country: 'Ukraine'
            },
            status: 'Hello, looking for programmer? I`m here! Have a nice day, people. Have a nice day, people. Have a nice day, people.',
            followed: true
        }, {
            id: 2,
            name: 'Emma',
            surname: 'Stoun',
            img: 'https://images.pexels.com/photos/7585597/pexels-photo-7585597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            location: {
                city: 'Lviv',
                country: 'Ukraine'
            },
            status: 'Photographer, look for my portfolio in bio',
            followed: false
        }, {
            id: 3,
            name: 'Kristy',
            surname: 'Lourens',
            img: 'https://images.pexels.com/photos/9412330/pexels-photo-9412330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            location: {
                city: 'Kyiv',
                country: 'Ukraine'
            },
            status: 'Sunny girl',
            followed: false
        }, {
            id: 4,
            name: 'Ben',
            surname: 'Redl',
            img: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            location: {
                city: 'London',
                country: 'England'
            },
            status: 'Yo yo yo',
            followed: true
        }, {
            id: 5,
            name: 'Mindy',
            surname: 'Palmer',
            img: 'https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            location: {
                city: 'Berlin',
                country: 'Germany'
            },
            status: 'Hi there',
            followed: false
        }, {
            id: 6,
            name: 'Olivia',
            surname: 'Ryder',
            img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            location: {
                city: 'Paris',
                country: 'France'
            },
            status: 'What`s up?',
            followed: true
        }, {
            id: 7,
            name: 'Jessica',
            surname: 'Walkman',
            img: 'https://images.pexels.com/photos/413885/pexels-photo-413885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            location: {
                city: 'Kharkiv',
                country: 'Ukraine'
            },
            status: 'Future doctor',
            followed: false
        }, {
            id: 8,
            name: 'Ben',
            surname: 'Wood',
            img: 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            location: {
                city: 'Odessa',
                country: 'Ukraine'
            },
            status: 'Have a nice day, people',
            followed: false
        }, {
            id: 9,
            name: 'Jon',
            surname: 'Owen',
            img: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            location: {
                city: 'Abu-Dabi',
                country: 'UAE'
            },
            status: 'Live this life!',
            followed: false
        }, {
            id: 10,
            name: 'Chloe',
            surname: 'Adamson',
            img: 'https://images.pexels.com/photos/7014916/pexels-photo-7014916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            location: {
                city: 'Moscow',
                country: 'Russia'
            },
            status: '',
            followed: true
        }, {
            id: 11,
            name: 'Jack',
            surname: 'Daniels',
            img: 'https://images.pexels.com/photos/4569901/pexels-photo-4569901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            location: {
                city: 'Kyiv',
                country: 'Ukraine'
            },
            status: 'My life - my rules!',
            followed: false
        }, {
            id: 12,
            name: 'Maryam',
            surname: 'Chapman',
            img: 'https://images.pexels.com/photos/6324469/pexels-photo-6324469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            location: {
                city: 'Boryslav',
                country: 'Ukraine'
            },
            status: '',
            followed: false
        },

    ]


}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            let stateCopy = {...state}
            stateCopy.users = [...state.users]


            return stateCopy
        }
        default: {
            return state
        }
    }

}

export const followActionCreator = (user) => {
    return {type: FOLLOW, userId: user.id}
}



export default usersReducer