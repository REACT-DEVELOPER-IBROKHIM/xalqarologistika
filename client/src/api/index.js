import axios from 'axios'
import { store } from '@store'
import { logout } from '@slices/auth'

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
    },
    timeout: 10000,
})

instance.interceptors.request.use(
    request => {
        request.headers['Authorization'] =
            'Bearer ' + store.getState().auth.token
        return request
    },
    error => {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    response => {
        if (response) return response
    },
    error => {
        if (error.response?.status === 401 || error.response?.status === 403) {
            store.dispatch(logout())
        }
        return Promise.reject(error)
    }
)

export default instance
