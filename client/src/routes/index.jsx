import { Routes, Route } from "react-router-dom";
import Home from "@routes/home/Home";
import Login from "@routes/auth/Login";
import Private from "@routes/private/Private";
import Create from "@routes/sub-routes/create/Create";
import ManageCertificates from "@routes/sub-routes/manage-certificate/ManageCertificate";
import Search from "@routes/search/Search";
import Certificates from "@routes/sub-routes/manage-certificate/certificate";
import Adr from "@routes/sub-routes/manage-certificate/adr";
import Manager from "@routes/sub-routes/manage-certificate/manager";
import AdrTank from "@routes/sub-routes/manage-certificate/adr-tank";
import Status from "./sub-routes/status";
import Details from "./sub-routes/status/details";
import SignatureUpload from "./signature-upload";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="check-certificates/:id" element={<Search />} />
      <Route path="admin" element={<Private />}>
        <Route index path="" element={<Create />} />
        <Route path="manage-certificate" element={<ManageCertificates />}>
          <Route path="driver" element={<Certificates />} />
          <Route path="adr" element={<Adr />} />
          <Route path="manager" element={<Manager />} />
          <Route path="adr-tank" element={<AdrTank />} />
          <Route path="drivercard" element={<Certificates />} />
        </Route>
        <Route path="status" element={<Status />}>
          <Route path=":id" element={<Details />} />
        </Route>
      </Route>
      <Route path="signature-upload/:id" element={<SignatureUpload />} />
    </Routes>
  );
};

export default index;
