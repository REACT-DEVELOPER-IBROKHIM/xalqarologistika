import './ManageCertificate.scss'
import certificateTypeList from '../../../static/CertificateTypeList'
import { NavLink, Outlet } from 'react-router-dom'

const ManageCertificates = () => {
    return (
        <div admincontent="content" className="flex flex-col gap-y-8">
            <nav className="rounded-xl shadow-3xl">
                <ul className="flex p-3 justify-around gap-10 ">
                    {certificateTypeList('manage').map(
                        (manageCertificateItem, route) => (
                            <li className="flex-1 justify-center" key={route}>
                                <NavLink
                                    className="block text-center p-2 rounded-lg hover:text-black transition duration-300"
                                    to={manageCertificateItem.route}
                                >
                                    {manageCertificateItem.name}
                                </NavLink>
                            </li>
                        )
                    )}
                </ul>
            </nav>
            <section className="p-4 bg-white shadow-3xl rounded-lg">
                <Outlet />
            </section>
        </div>
    )
}

export default ManageCertificates
