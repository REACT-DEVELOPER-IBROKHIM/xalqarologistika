import axios from 'axios'
import { store } from '../redux/store'

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
    },
    timeout: 10000,
})

instance.interceptors.request.use(
    request => {
        request.headers['Authorization'] = store.getState().auth.token
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
            store.dispatch({ type: 'LOGOUT' })
        }
        return Promise.reject(error)
    }
)

export default instance
