import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "b29e5b99-982c-49c5-af2c-eee74a9a7c55"
    }
})

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 6) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }
}

export const followAPI = {
    follow: (id) => {
        return instance.post(`follow/${id}`, {}).then(response => response.data)
    },
    unfollow: (id) => {
        return instance.delete(`follow/${id}`).then(response => response.data)
    }
}

export const profileAPI = {
    getProfile: (id) => {
        return instance.get(`profile/${id}`).then(response => response.data)
    },
    getStatus: (id) => {
        return instance.get(`profile/status/${id}`).then(response => response.data)
    },
    updateStatus: (status) => {
        return instance.put('profile/status', {status}).then(response => response.data)
    }
}
export const authAPI = {
    getAuth: () => {
        return instance.get('auth/me').then(response => response.data)
    }
}

export const friendsAPI = {
    setFriends: () => {
        return instance.get('/users?friend=true').then(response => response.data)
    }
}