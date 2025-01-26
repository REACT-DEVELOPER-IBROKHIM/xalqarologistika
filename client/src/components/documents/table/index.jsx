import {
    DeleteOutlined,
    DownloadOutlined,
    EditOutlined,
} from '@ant-design/icons'
import { Button, Table, Modal, message } from 'antd'
import ReactToPrint from 'react-to-print'
import DriverCertificate from '@components/documents/driver/DriverCertificate'
import AdrCertificate from '@components/documents/adr/AdrCertificate'
import { useState, useRef } from 'react'
import { EMPTY_DOCUMENT, SIMILAR_DOCUMENT_TYPES } from '@constants/document'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleDocumentThunk } from '@thunks/single-document-thunk'
import {
    getSingleDocument,
    getSingleDocumentLoading,
} from '@selectors/single-document'
import { removeCurrentDocument } from '@slices/single-document'
import Edit from '@routes/sub-routes/edit'
import { deleteDocumentThunk } from '@/redux/thunks/documents-thunks'
import { updateUI } from '@/helpers/update-ui'

const DocumentsTable = ({ data, loading, type }) => {
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false)
    const [deleteDocument, setDeleteDocument] = useState(null)
    const curretDocument = useSelector(getSingleDocument)
    const isCurrentDocumentLoading = useSelector(getSingleDocumentLoading)
    const printFrame = useRef()
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
                        disabled={isCurrentDocumentLoading}
                        loading={isCurrentDocumentLoading}
                        onClick={() => handleEditDocument(document)}
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
        setDeleteModalOpen(true)
        setDeleteDocument(document)
    }

    const handleEditDocument = document => {
        dispatch(
            fetchSingleDocumentThunk({
                endpoint: type,
                id: document._id,
            })
        )
    }

    console.log(curretDocument)

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
            {curretDocument && (
                <Modal
                    width={'80%'}
                    bodyStyle={{ height: '84vh', overflow: 'auto' }}
                    open={Boolean(curretDocument)}
                    footer={null}
                    maskClosable={false}
                    onCancel={() => dispatch(removeCurrentDocument())}
                >
                    <Edit
                        currentDocument={curretDocument}
                        documentType={type}
                    />
                </Modal>
            )}
            {isDeleteModalOpen && deleteDocument && (
                <Modal
                    open={isDeleteModalOpen}
                    onCancel={() => setDeleteModalOpen(false)}
                    onOk={() => {
                        setDeleteModalOpen(false)
                        dispatch(
                            deleteDocumentThunk({
                                endpoint: type,
                                id: deleteDocument._id,
                                onSuccess: () => {
                                    dispatch(updateUI(type))
                                    message.success('Sertifikat o`chirildi')
                                },
                            })
                        )
                    }}
                    okText="O`chirish"
                    cancelText="Orqaga"
                >
                    <p>Sertifikatni o`chirishni tasdiqlaysizmi?</p>
                </Modal>
            )}
        </div>
    )
}

export default DocumentsTable
