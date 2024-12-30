import { useEffect } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './Admin.scss'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const Admin = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    useEffect(() => {
        if (pathname === '/admin') {
            navigate('/admin/create-certificate')
        }
    }, [pathname])
    return (
        <div className="admin__layout">
            <Sidebar />
            <main className="admin__content">
                <Outlet />
            </main>
        </div>
    )
}

export default Admin
