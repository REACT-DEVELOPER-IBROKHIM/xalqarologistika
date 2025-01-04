import './ManageCertificate.scss'
import certificateTypeList from '../../../static/CertificateTypeList'
import { NavLink, Outlet } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { useTranslation } from 'react-i18next'

const ManageCertificates = () => {
    const { t } = useTranslation()

    return (
        <div admincontent="content" className="manage-certificate">
            <h2 className="admin-content__heading">{t('manage.title')}</h2>
            <nav className="manage-certificate__nav">
                <ul className="manage-certificate__list">
                    {certificateTypeList('manage').map(
                        manageCertificateItem => (
                            <li
                                className="manage-certificate__item"
                                key={uuidv4()}
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
