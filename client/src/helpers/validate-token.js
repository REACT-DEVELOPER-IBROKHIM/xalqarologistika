import { store } from '../redux/store'

const validateToken = token => {
    if (token) {
        const tokenExpDate =
            JSON.parse(atob(token.split(' ')[1].split('.')[1])).exp * 1000
        const now = new Date().getTime()
        if (now < tokenExpDate) {
            return true
        }
    }
    store.dispatch({ type: 'LOGOUT' })
    return false
}

export default validateToken
