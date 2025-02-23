import { useState } from "react";
import generateCertificateTypeList from "@static/CertificateTypeList";
import { Outlet } from "react-router-dom";
import { Menu, Input } from "antd";

const { Search } = Input;

const ManageCertificates = () => {
  const [current, setCurrent] = useState("mail");

  const onClick = (e) => {
    setCurrent(e.key);
  };

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
