import { useState } from 'react'
import generateCertificateTypeList from '@static/CertificateTypeList'
import { Outlet } from 'react-router-dom'
import { Menu, Input } from 'antd'

const { Search } = Input

const ManageCertificates = () => {
    const [current, setCurrent] = useState('mail')

    const onClick = e => {
        setCurrent(e.key)
    }

    const handleDocumentSearch = () => {}

    return (
        <div className="flex flex-col">
            <nav className="bg-white flex items-center shadow-3xl mb-4 p-2 px-8">
                <Search
                    placeholder="ID raqami bo'yicha, ismi yoki familiyasi bo'yicha qidirish"
                    onSearch={handleDocumentSearch}
                    enterButton
                />
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
    )
}

export default ManageCertificates
