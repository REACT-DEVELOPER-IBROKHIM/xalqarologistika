import { resolve } from '../../helpers/resolve-response'
import axios from '../index'

export async function loginUser(data) {
    console.log(axios.post('/auth/login', data))
    return {
        data: {
            user: 'wefe',
            token: 'wefe',
        },
    }
}
