import { NavLink } from "react-router-dom";
import "./Admin.scss";
import { PlusCircleOutlined, SettingOutlined } from "@ant-design/icons";
import { Outlet, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { useTranslation } from "react-i18next";
import logo from "@assets/logo/logo.svg";

const { Header, Sider, Content } = Layout;

const Admin = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  return (
    <Layout className="min-h-screen w-full">
      <Sider width={250} className="p-2 !bg-white shadow-xl" trigger={null}>
        <div className="min-h-[40px] h-[40px] mt-2 mb-4">
          <img className="my-4 px-4" src={logo} alt="" />
        </div>
        <Menu
          className="bg-transparent !border-none"
          mode="inline"
          items={[
            {
              key: "1",
              icon: <PlusCircleOutlined />,
              label: (
                <NavLink end to="">
                  {t("services.create")}
                </NavLink>
              ),
            },
            {
              key: "2",
              icon: <SettingOutlined />,
              label: (
                <NavLink to="manage-certificate">
                  {t("services.manage")}
                </NavLink>
              ),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header className="px-4 bg-white shadow-xl flex items-center text-xl font-semibold">
          {pathname === "/admin" ? t("services.create") : t("services.manage")}
        </Header>
        <Content className="p-4">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Admin;
