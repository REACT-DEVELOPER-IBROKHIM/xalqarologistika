import React from 'react'
import { Form, Input } from 'antd'
import dayjs from 'dayjs'
import { DatePicker } from 'antd'
import { DATE_FORMAT } from '@/constants/document'
import { setDataToLocalStorage } from '@/helpers/localStorageActions'

const { Item } = Form

const EditForm = ({ setDocument, document, form }) => {
    const onFinish = values => {
        console.log('Success:', values)
    }
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo)
    }

    const handleValuesChange = values => {
        setDocument({ ...document, ...values })
        setDataToLocalStorage('currentDocument', { ...document, ...values })
    }

    const validateInput = (_, value) => {
        const pattern1 = /^D\d{4}$/
        const pattern2 = /^\d{6}$/

        if (pattern1.test(value) || pattern2.test(value)) {
            return Promise.resolve()
        }

        return Promise.reject(
            new Error('Shu formatda kiriting "D0001", "000001"')
        )
    }

    return (
        <Form
            form={form}
            className="p-10"
            name="basic"
            initialValues={{
                ...document,
                birthDate: document.birthDate
                    ? dayjs(document.birthDate, DATE_FORMAT)
                    : null,
                from: document.from ? dayjs(document.from, DATE_FORMAT) : null,
                to: document.to ? dayjs(document.to, DATE_FORMAT) : null,
            }} 
            layout="vertical"
            onFinish={onFinish}
            onValuesChange={handleValuesChange}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <div className="flex justify-between gap-10">
                <Item
                    className="flex-1"
                    label="Id raqami"
                    name="id"
                    rules={[
                        {
                            required: true,
                            message: 'Iltimos id raqamini kiriting!',
                        },
                        {
                            validator: validateInput,
                        },
                    ]}
                >
                    <Input
                        className="flex-1 uppercase"
                        onChange={e => {
                            handleValuesChange({
                                ...document,
                                id: e.target.value.toUpperCase(),
                            })
                        }}
                    />
                </Item>
                <Item
                    className="flex-1"
                    label="Ism"
                    name="name"
                    rules={[
                        { required: true, message: 'Iltimos ismni kiriting!' },
                    ]}
                >
                    <Input
                        className="flex-1 uppercase"
                        onChange={e => {
                            handleValuesChange({
                                ...document,
                                name: e.target.value.toUpperCase(),
                            })
                        }}
                    />
                </Item>
            </div>
            <div className="flex justify-between gap-10">
                <Item
                    className="flex-1"
                    label="Familiya"
                    name="surname"
                    rules={[
                        {
                            required: true,
                            message: 'Iltimos familiyani kiriting!',
                        },
                    ]}
                >
                    <Input
                        className="flex-1 uppercase"
                        onChange={e => {
                            handleValuesChange({
                                ...document,
                                surname: e.target.value.toUpperCase(),
                            })
                        }}
                    />
                </Item>
                <Item
                    className="flex-1"
                    label="Otasini Ismi"
                    name="middlename"
                    rules={[
                        {
                            required: true,
                            message: 'Iltimos otasini ismini kiriting!',
                        },
                    ]}
                >
                    <Input
                        className="flex-1 uppercase"
                        onChange={e => {
                            handleValuesChange({
                                ...document,
                                middlename: e.target.value.toUpperCase(),
                            })
                        }}
                    />
                </Item>
            </div>
            <div className="flex justify-between gap-10">
                <Item
                    className="flex-1"
                    label="Tug'ilgan kun sanasi"
                    name="birthDate"
                    rules={[
                        {
                            required: true,
                            message: 'Iltimos tugilgan kun sanasini kiriting!',
                        },
                    ]}
                >
                    <DatePicker
                        onChange={(_, dateString) => {
                            handleValuesChange({
                                ...document,
                                birthDate: dateString,
                            })
                        }}
                        className="flex-1 flex"
                        initialValues={dayjs('01.01.2015', DATE_FORMAT)}
                        format={DATE_FORMAT}
                    />
                </Item>
                <Item
                    className="flex-1"
                    label="Berilgan sanasi"
                    name="from"
                    rules={[
                        {
                            required: true,
                            message: 'Iltimos berilgan sanani kiriting!',
                        },
                    ]}
                >
                    <DatePicker
                        onChange={(_, dateString) => {
                            handleValuesChange({
                                ...document,
                                from: dateString,
                            })
                        }}
                        className="flex-1 flex"
                        initialValues={dayjs('01.01.2015', DATE_FORMAT)}
                        format={DATE_FORMAT}
                    />
                </Item>
                <Item
                    className="flex-1"
                    label="Amal qilish sanasi"
                    name="to"
                    rules={[
                        {
                            required: true,
                            message: 'Iltimos amal qilish sanasini kiriting!',
                        },
                    ]}
                >
                    <DatePicker
                        onChange={(_, dateString) => {
                            handleValuesChange({ ...document, to: dateString })
                        }}
                        className="flex-1 flex"
                        initialValues={dayjs('01.01.2015', DATE_FORMAT)}
                        format={DATE_FORMAT}
                    />
                </Item>
            </div>
        </Form>
    )
}

export default EditForm
