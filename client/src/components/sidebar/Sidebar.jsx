import './Sidebar.scss'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import logo from '../../assets/logo/logo.svg'
import { Button } from '../../utils/Utils'
import { logout } from '../../redux/actions/login-actions'
import Modal from '../modal/Modal'
import { useEffect, useRef, useState } from 'react'
import axios from '../../api'
import { useTranslation } from 'react-i18next'

const Sidebar = () => {
    const { t } = useTranslation()
    const [username, setUserName] = useState('')
    const modal = useRef()
    const dispatch = useDispatch()

    useEffect(() => {
        axios('/admin/profile')
            .then(response => setUserName(response.data.username))
            .catch(err => console.log(err))
    }, [])

    const handleLogout = () => {
        modal.current.openModal()
    }

    return (
        <aside className="sidebar">
            <h1>Admin</h1>
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
            <div className="sidebar__profile">
                <div className="sidebar__profile-avatar">
                    <h3>{username[0]?.toUpperCase()}</h3>
                </div>
                <div className="sidebar__profile-name">
                    <strong>{username}</strong>
                    <p>Admin</p>
                </div>
            </div>
            <div className="sidebar__menu-wrapper">
                <div className="sidebar__menu">
                    <ul className="sidebar__menu-list">
                        <li>
                            <NavLink to="create-certificate">
                                {t('services.create')}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="manage-certificate/manage-driver-certificate?limit=10&page=1">
                                {t('services.manage')}
                            </NavLink>
                        </li>
                        {/* <li><NavLink className={({isActive}) => isActive ? "sidebar__menu-item--active" : "sidebar__menu-item-link"} to="/admin/add-admin">Add new admin</NavLink></li> */}
                        <li>
                            <NavLink to="analytics">
                                {t('services.analytics')}
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Button
                    text={t('create.logoutbtn')}
                    appearance="danger"
                    clickHandler={handleLogout}
                />
                <Modal
                    ref={modal}
                    title={t('create.logoutmodal-title')}
                    text={t('create.logoutmodal-text')}
                    btn={{
                        text: `${t('create.logoutbtn')}`,
                        appearance: 'danger',
                        clickHandler: () => dispatch(logout()),
                    }}
                />
            </div>
        </aside>
    )
}

export default Sidebar
