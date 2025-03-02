import React from "react";
import { Outlet } from "react-router-dom";
import { Input } from "antd";
const { Search } = Input;

const Status = () => {
  return (
    <div className="flex flex-col">
      <nav className="bg-white flex items-center shadow-3xl mb-4 p-2 px-8">
        <Search placeholder="Search certificates" enterButton />
      </nav>
      <section className="p-4 bg-white shadow-3xl">
        <Outlet />
      </section>
    </div>
  );
};

export default Status;
