import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Login from "./auth/Login";
import Private from "./private/Private";
import Create from "./sub-routes/create/Create";
import ManageCertificates from "./sub-routes/manage-certificate/ManageCertificate";
// import AddAdmin from "./sub-routes/add-admin/AddAdmin";
import Analytics from "./sub-routes/analytics/Analytics";
import CertificatesTable from "../components/certificates-table/CertificatesTable";
import Search from "./search/Search";

const index = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="check-certificates/:id" element={<Search />} />
            <Route path="admin" element={<Private />}>
                <Route path="create-certificate" element={<Create />} />
                <Route path="manage-certificate" element={<ManageCertificates />}>
                  <Route path=":type" element={<CertificatesTable/>} />
                </Route>
                {/* <Route path="add-admin" element={<AddAdmin />} /> */}
                <Route path="analytics" element={<Analytics />} />
            </Route>
        </Routes>
    </>
  )
}

export default index