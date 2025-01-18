import './Create.scss'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import DriverCertificate from '@components/documents/driver/DriverCertificate'
import AdrCertificate from '@components/documents/adr/AdrCertificate'
import ReactToPrint from 'react-to-print'
import getFormattedTime from '@helpers/getFormattedTime'
import Typography from 'antd/es/typography/Typography'
import { Button, Checkbox, Input, Select } from 'antd'
import { Steps } from 'antd'
import {
    ArrowLeftOutlined,
    ArrowRightOutlined,
    CheckCircleOutlined,
    EditOutlined,
    EnterOutlined,
    EyeOutlined,
    SaveOutlined,
} from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { convertToValueLabel } from '@/helpers/formItems'
import { DOCUMENT_TYPES_LIST } from '@/constants/document'
import CreateForm from './form'
import Preview from '@routes/sub-routes/create/preview'
import { useDispatch, useSelector } from 'react-redux'
import { getDocumentId, getDocumentsLoading } from '@/redux/selectors/documents'
import { fetchDocumentIdThunk } from '@/redux/thunks/documents-thunks'

const { Title } = Typography

const Create = () => {
    const dispatch = useDispatch()
    const [isFormValid, setFormValid] = useState(false)
    const currentDocumentId = useSelector(getDocumentId)
    const loading = useSelector(getDocumentsLoading)
    const [documentType, setDocumentType] = useState(DOCUMENT_TYPES_LIST[0].key)
    const [document, setDocument] = useState({
        id: null,
        name: '',
        surname: '',
        middlename: '',
        birthDate: '',
        from: '',
        to: '',
    })

    const [current, setCurrent] = useState(0)

    const next = () => {
        setCurrent(current + 1)
    }
    const prev = () => {
        setCurrent(current - 1)
    }

    useEffect(() => {
        setFormValid(
            document.name &&
                document.surname &&
                document.birthDate &&
                document.middlename &&
                document.from &&
                document.to
        )
    }, [document])

    useEffect(() => {
        if (isFormValid) {
            dispatch(fetchDocumentIdThunk({ endpoint: documentType }))
        }
    }, [documentType, isFormValid])

    return (
        <div
            admincontent="content"
            className="w-full shadow-3xl h-full bg-white p-4"
        >
            <Title level={3}>
                Sertifikat turi:{' '}
                <Select
                    value={documentType}
                    onChange={value => setDocumentType(value)}
                    className="w-[200px]"
                    defaultValue={DOCUMENT_TYPES_LIST[0].key}
                    options={convertToValueLabel(
                        DOCUMENT_TYPES_LIST,
                        'key',
                        'label'
                    )}
                />{' '}
            </Title>
            <Steps
                className="mt-4 p-8"
                current={current}
                items={[
                    {
                        title: "Ma'lumot kiritish",
                        icon: <EditOutlined />,
                    },
                    {
                        title: 'Hujjatni tekshirish',
                        icon: <EyeOutlined />,
                    },
                    {
                        title: 'Hujjatni saqlash',
                        icon: <SaveOutlined />,
                    },
                    {
                        title: 'Hujjat holatini tekshirish',
                        icon: <CheckCircleOutlined />,
                    },
                ]}
            />

            {current === 0 && (
                <CreateForm document={document} setDocument={setDocument} />
            )}
            {current === 1 && (
                <Preview
                    document={{ ...document, id: currentDocumentId }}
                    type={documentType}
                />
            )}
            <div className="flex justify-between">
                <Button disabled={current === 0} type="primary" onClick={prev}>
                    <ArrowLeftOutlined /> Orqaga
                </Button>
                <Button
                    loading={loading}
                    disabled={current === 3 || !currentDocumentId}
                    type="primary"
                    onClick={next}
                >
                    Keyingi <ArrowRightOutlined />
                </Button>
            </div>
        </div>
    )
}

export default Create
