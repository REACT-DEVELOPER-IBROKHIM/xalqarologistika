import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Admin.scss'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PlusCircleOutlined,
    SettingOutlined,
} from '@ant-design/icons'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Button, Layout, Menu } from 'antd'
import { useTranslation } from 'react-i18next'
import logo from '../../assets/logo/logo.svg'
import logoSmall from '../../assets/logo/logo-small.svg'

const { Header, Sider, Content } = Layout

const Admin = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const { pathname } = useLocation()
    useEffect(() => {
        if (pathname === '/admin') {
            navigate('/admin/create-certificate')
        }
    }, [pathname])
    return (
        <Layout className="min-h-screen">
            <Sider
                width={250}
                className="p-2 !bg-white shadow-xl"
                trigger={null}
            >
                <div className="min-h-[40px] h-[40px] mt-2 mb-4">
                    <img className="my-4 px-4" src={logo} alt="" />
                </div>
                <Menu
                    className="bg-transparent !border-none"
                    mode="inline"
                    items={[
                        {
                            key: '1',
                            icon: <PlusCircleOutlined />,
                            label: (
                                <NavLink to="create-certificate">
                                    {t('services.create')}
                                </NavLink>
                            ),
                        },
                        {
                            key: '2',
                            icon: <SettingOutlined />,
                            label: (
                                <NavLink to="manage-certificate">
                                    {t('services.manage')}
                                </NavLink>
                            ),
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header className="px-4 bg-white shadow-xl flex items-center">
                    <h2 className="text-xl">{t('manage.title')}</h2>
                </Header>
                <Content className="p-4">
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}

export default Admin
