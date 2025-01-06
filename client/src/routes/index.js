import { Routes, Route } from 'react-router-dom'
import Home from './home/Home'
import Login from './auth/Login'
import Private from './private/Private'
import Create from './sub-routes/create/Create'
import ManageCertificates from './sub-routes/manage-certificate/ManageCertificate'
import Analytics from './sub-routes/analytics/Analytics'
import CertificatesTable from '../components/certificates-table/CertificatesTable'
import Search from './search/Search'
import Certificates from './sub-routes/manage-certificate/certificate'
import Adr from './sub-routes/manage-certificate/adr'
import Manager from './sub-routes/manage-certificate/manager'
import AdrTank from './sub-routes/manage-certificate/adr-tank'

const index = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="check-certificates/:id" element={<Search />} />
            <Route path="admin" element={<Private />}>
                <Route path="create-certificate" element={<Create />} />
                <Route
                    path="manage-certificate"
                    element={<ManageCertificates />}
                >
                    <Route path="driver" element={<Certificates/>} />
                    <Route path="adr" element={<Adr/>} />
                    <Route path="manager" element={<Manager/>} />
                    <Route path="adr-tank" element={<AdrTank/>} />
                </Route>
                <Route path="analytics" element={<Analytics />} />
            </Route>
        </Routes>
    )
}

export default index
