import { useEffect, useState } from 'react'
import './Admin.scss'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Button, Layout, Menu } from 'antd';
import logo from "../../assets/logo/logo.svg"
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons'

const { Header, Sider, Content } = Layout;

const Admin = () => {
    const [collapsed, setCollapsed] = useState(false)
    const navigate = useNavigate()
    const { pathname } = useLocation()
    useEffect(() => {
        if (pathname === '/admin') {
            navigate('/admin/create-certificate')
        }
    }, [pathname])
    return (
        // <div className="admin__layout">
        //     <Sidebar />
        //     <main className="admin__content">
        //         <Outlet />
        //     </main>
        // </div>

        <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <img src={logo} alt="" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header>
                    <Button
                        type="text"
                        icon={
                            collapsed ? (
                                <MenuUnfoldOutlined />
                            ) : (
                                <MenuFoldOutlined />
                            )
                        }
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}

export default Admin
