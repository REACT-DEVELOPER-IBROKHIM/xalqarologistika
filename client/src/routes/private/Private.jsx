import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Admin from '../admin/Admin'
import validateToken from '../../helpers/validate-token'

const Private = () => {
    const { user, token } = useSelector(state => state.login)
    return user && token && validateToken(token) ? (
        <Admin />
    ) : (
        <Navigate to="/login" />
    )
}

export default Private
