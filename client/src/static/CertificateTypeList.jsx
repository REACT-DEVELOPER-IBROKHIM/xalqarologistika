import { NavLink } from "react-router-dom";

const generateCertificateTypeList = () => {
  const endpoints = ["driver", "adr", "manager", "adr-tank"];
  return endpoints.map((endpoint) => ({
    key: endpoint,
    label: (
      <NavLink end to={endpoint.replace("driver", "")}>
        {endpoint.toUpperCase()}
      </NavLink>
    ),
  }));
};

export default generateCertificateTypeList;
