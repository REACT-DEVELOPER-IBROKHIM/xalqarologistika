import { NavLink } from "react-router-dom";

const generateCertificateTypeList = () => {
  const endpoints = ["drivercard", "driver", "adr", "manager", "adr-tank"];
  return endpoints.map((endpoint) => ({
    key: endpoint,
    label: (
      <NavLink end to={endpoint}>
        {endpoint.toUpperCase()}
      </NavLink>
    ),
  }));
};

export default generateCertificateTypeList;
