import { LOGIN, LOGOUT } from '../actions/types'

const login = (user, token) => {
    return {
        type: LOGIN,
        payload: {
            user,
            token,
        },
    }
}

const logout = () => {
    return {
        type: LOGOUT,
    }
}

export { login, logout }
