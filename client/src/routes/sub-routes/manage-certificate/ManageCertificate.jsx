import { useEffect, useState } from "react";
import generateCertificateTypeList from "@static/CertificateTypeList";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "antd";

const ManageCertificates = () => {
  const {pathname} = useLocation()
  const navigate = useNavigate();
  const [current, setCurrent] = useState("mail");

  const onClick = (e) => {
    setCurrent(e.key);
  };

  useEffect(() => {
    if(pathname?.endsWith("/manage-certificate")) {
      navigate("drivercard")
    }
  }, [pathname])

  console.log(pathname)

  return (
    <div className="flex flex-col">
      <nav className="bg-white flex items-center shadow-3xl mb-4 p-2 px-8">
        <Menu
          className="border-none flex gap-4"
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={generateCertificateTypeList()}
        />
      </nav>
      <section className="p-4 bg-white shadow-3xl">
        <Outlet />
      </section>
    </div>
  );
};

export default ManageCertificates;
