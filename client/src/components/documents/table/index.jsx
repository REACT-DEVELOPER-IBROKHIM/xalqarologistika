import {
    DeleteOutlined,
    DownloadOutlined,
    EditOutlined,
} from '@ant-design/icons'
import { Button, Table } from 'antd'
import ReactToPrint from 'react-to-print'
import DriverCertificate from '@components/documents/driver/DriverCertificate'
import AdrCertificate from '@components/documents/adr/AdrCertificate'
import { useState, useRef } from 'react'
import { EMPTY_DOCUMENT, SIMILAR_DOCUMENT_TYPES } from '@/constants/document'
import { useDispatch } from 'react-redux'
import { fetchSingleDocumentThunk } from '@/redux/thunks/documents-thunks'
import { useNavigate } from 'react-router-dom'

const DocumentsTable = ({ data, loading, type }) => {
    const printFrame = useRef()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [document, setDocument] = useState(null)
    const columns = [
        {
            title: '  Id raqami',
            dataIndex: 'id',
            key: 'id',
            width: '10%',
        },
        {
            title: 'Ism',
            dataIndex: 'name',
            key: 'name',
            width: '20%',
        },
        {
            title: 'Familiya',
            dataIndex: 'surname',
            key: 'surname',
            width: '20%',
        },
        {
            title: 'Tug`ulgan sana',
            dataIndex: 'birthDate',
            key: 'birthDate',
            width: '10%',
        },
        {
            title: 'Berilgan sana',
            dataIndex: 'from',
            key: 'from',
            width: '10%',
        },
        {
            title: 'Tugash sana',
            dataIndex: 'to',
            key: 'to',
            width: '10%',
        },
        {
            title: 'Boshqarish',
            key: 'action',
            render: document => (
                <div className="flex gap-2">
                    <ReactToPrint
                        trigger={() => (
                            <Button
                                disabled={document.id === EMPTY_DOCUMENT}
                                type="primary"
                                onFocus={() => setDocument(document)}
                            >
                                <DownloadOutlined />
                            </Button>
                        )}
                        content={() => printFrame.current}
                    />
                    <Button
                        style={{ backgroundColor: '#FFB629' }}
                        type="primary"
                        onClick={data => handleEditDocument(document)}
                    >
                        <EditOutlined />
                    </Button>
                    <Button
                        onClick={() => handleDeleteDocument(document)}
                        type="primary"
                        danger
                        disabled={document.id === EMPTY_DOCUMENT}
                    >
                        <DeleteOutlined />
                    </Button>
                </div>
            ),
        },
    ]

    const handleDeleteDocument = document => {
        console.log(document)
    }

    const handleEditDocument = document => {
        dispatch(
            fetchSingleDocumentThunk({
                endpoint: type,
                id: document._id,
                onSuccess: () => {
                    navigate(`/admin/edit?type=${type}`)
                },
            })
        )
    }

    return (
        <div className="p-4 bg-white">
            <Table
                loading={loading}
                className="w-full"
                rowKey="_id"
                columns={columns}
                dataSource={data}
            />
            <div className="hidden w-0 h-0">
                {document && (
                    <>
                        {SIMILAR_DOCUMENT_TYPES.DRIVER.includes(type) ? (
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

export default DocumentsTable
