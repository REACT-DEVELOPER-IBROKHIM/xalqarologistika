import './ManageCertificate.scss'
import certificateTypeList from '../../../static/CertificateTypeList'
import { NavLink, Outlet } from 'react-router-dom'

const ManageCertificates = () => {
    return (
        <div admincontent="content" className="manage-certificate">
            <nav className="manage-certificate__nav">
                <ul className="manage-certificate__list">
                    {certificateTypeList('manage').map(
                        (manageCertificateItem, route) => (
                            <li
                                className="manage-certificate__item"
                                key={route}
                            >
                                <NavLink to={manageCertificateItem.route}>
                                    {manageCertificateItem.name}
                                </NavLink>
                            </li>
                        )
                    )}
                </ul>
            </nav>
            <section className="manage-certificate__content">
                <Outlet />
            </section>
        </div>
    )
}

export default ManageCertificates
