import { EMPTY_DOCUMENT, SIMILAR_DOCUMENT_TYPES } from '@/constants/document'
import { removeDataFromLocalStorage } from '@/helpers/localStorageActions'
import { getDocumentsLoading } from '@/redux/selectors/documents'
import { createDocumentThunk } from '@/redux/thunks/documents-thunks'
import { Badge, Button, Descriptions, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import ReactToPrint from 'react-to-print'
import { useRef, useState } from 'react'
import { DownloadOutlined } from '@ant-design/icons'
import AdrCertificate from '@/components/documents/adr/AdrCertificate'
import DriverCertificate from '@/components/documents/driver/DriverCertificate'
import { removeCurrentDocumentId } from '@/redux/slices/documents'

const SaveAndCheck = ({ document, setDocument, setCurrent, documentType }) => {
    const printFrame = useRef()
    const [isDownloaded, setDownloaded] = useState(false)
    const dispatch = useDispatch()
    const loading = useSelector(getDocumentsLoading)
    const items = [
        {
            key: '1',
            label: 'Tashkilot nomi',
            children: 'NAMANGANTRANS 2022',
        },
        {
            key: '2',
            label: 'Qayd raqami',
            children: document?.id,
        },
        {
            key: '3',
            label: 'Ism',
            children: document?.name,
        },
        {
            key: '4',
            label: 'Familiya',
            children: document?.surname,
        },
        {
            key: '5',
            label: 'Otasining ismi',
            children: document?.middlename,
        },
        {
            key: '6',
            label: 'Tug`ulgan sana',
            children: document?.birthDate,
        },
        {
            key: '7',
            label: 'Berilgan sana',
            children: document?.from,
        },
        {
            key: '8',
            label: 'Amal qilish sanasi',
            children: document?.to,
        },
        {
            key: '9',
            label: 'Sertifikat imzosi',
            span: 3,
            children: (
                <Badge
                    status={document?.signature ? 'success' : 'error'}
                    text={document?.signature ? 'Mavjud' : 'Mavjud emas'}
                />
            ),
        },
        {
            key: '10',
            label: 'Sertifikat mavjudligi',
            span: 3,
            children: <Badge status="success" text={'Mavjud'} />,
        },
    ]

    const handleCancelValues = () => {
        setCurrent(0)
        setDocument({})
        dispatch(removeCurrentDocumentId())
        removeDataFromLocalStorage('document')
    }

    const handleSaveAndCheck = () => {
        dispatch(
            createDocumentThunk({
                endpoint: documentType,
                document,
                onSuccess: () => {
                    handleCancelValues()
                    message.success('Sertifikat saqlandi')
                },
            })
        )
    }

    return (
        <div className="flex h-[580px] overflow-y-auto">
            <div className="w-full">
                <Descriptions
                    className="w-full"
                    title="User Info"
                    layout="vertical"
                    bordered
                    items={items}
                />
                <div className="flex justify-between mt-4">
                    <div className="flex gap-4">
                        <ReactToPrint
                            trigger={() => (
                                <Button
                                    disabled={document.id === EMPTY_DOCUMENT}
                                    type="primary"
                                    onFocus={() => {
                                        setDownloaded(true)
                                    }}
                                >
                                    Yuklab olish <DownloadOutlined />
                                </Button>
                            )}
                            content={() => printFrame.current}
                        />
                        {isDownloaded && (
                            <Button
                                type="primary"
                                loading={loading}
                                disabled={loading}
                                onClick={handleSaveAndCheck}
                            >
                                Saqlash
                            </Button>
                        )}
                    </div>
                    <Button
                        onClick={handleCancelValues}
                        variant="outlined"
                        danger
                    >
                        Bekor qilish
                    </Button>
                </div>
            </div>
            <div className="hidden w-0 h-0">
                {document && (
                    <>
                        {SIMILAR_DOCUMENT_TYPES.DRIVER.includes(
                            documentType
                        ) ? (
                            <DriverCertificate
                                document={document}
                                ref={printFrame}
                            />
                        ) : (
                            <AdrCertificate
                                document={document}
                                ref={printFrame}
                            />
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default SaveAndCheck
