import { LOGIN, LOGOUT } from '../actions/types'

const initialState = {
    user: null,
    token: null,
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                user: action.payload.user._id,
                token: 'Bearer ' + action.payload.token,
            }
        case LOGOUT:
            return {
                user: null,
                token: null,
            }
        default:
            return state
    }
}

export default loginReducer
