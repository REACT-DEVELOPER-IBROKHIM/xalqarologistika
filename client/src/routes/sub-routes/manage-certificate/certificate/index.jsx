import React, { useEffect } from 'react'
import DocumentsTable from '@components/documents/table'
import { getDriverDocuments, getDocumentsLoading } from '@selectors/documents'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { generateDocumentType } from '@helpers/document-type'
import { fetchDriverDocumentsThunk } from '@thunks/documents-thunks'

const Certificates = () => {
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    const docType = generateDocumentType(pathname)
    const data = useSelector(getDriverDocuments)
    const loading = useSelector(getDocumentsLoading)

    useEffect(() => {
        dispatch(fetchDriverDocumentsThunk({ endpoint: docType.type }))
    }, [pathname])

    return (
        <div>
            <DocumentsTable data={data} loading={loading} type={docType.type} />
        </div>
    )
}

export default Certificates
