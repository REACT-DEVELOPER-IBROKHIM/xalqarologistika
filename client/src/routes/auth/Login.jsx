import logo from '@assets/logo/logo.svg'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { loginUserThunk } from '@thunks/auth-thunks'
import { Button, Form, Input, message, Typography } from 'antd'
import { useEffect } from 'react'
import { getIsAuthenticated } from '@selectors'

const { Title } = Typography

const Login = () => {
    const navigate = useNavigate()
    const [messageApi] = message.useMessage()
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const isAuthenticated = useSelector(getIsAuthenticated)

    const handleUserLogin = async ({ username, password }) => {
        dispatch(loginUserThunk({ username, password }))
    }

    useEffect(() => {
        if (isAuthenticated) {
            messageApi.success('Muvaffaqiyatli tizimga kirdingiz!')
            navigate('/admin')
        }
    }, [isAuthenticated])

    const onFinishFailed = errorInfo => {
        messageApi.success(errorInfo)
    }

    return (
        <div className="h-screen w-full flex items-center justify-center">
            <Form
                name="basic"
                layout="vertical"
                initialValues={{
                    remember: true,
                }}
                onFinish={handleUserLogin}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="shadow-3xl p-10 rounded-lg max-w-[400px] w-full"
            >
                <Link to="/" className="flex justify-center">
                    <img src={logo} className="max-w-[200px]" alt="" />
                </Link>
                <Title className="text-center mt-4" level={2}>
                    {t('login.title')}
                </Title>
                <Form.Item
                    label="Foydalanuvchi nomi"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Iltimos foydalanuvchi nomini kiriting!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Parol"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Iltimos parolni kiriting!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item label={null}>
                    <Button
                        className="w-full mt-4"
                        type="primary"
                        htmlType="submit"
                    >
                        {t('login.title')}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login
