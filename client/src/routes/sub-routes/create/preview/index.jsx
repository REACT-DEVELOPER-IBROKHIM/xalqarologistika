import AdrCertificate from '@/components/documents/adr/AdrCertificate'
import DriverCertificate from '@/components/documents/driver/DriverCertificate'
import { SIMILAR_DOCUMENT_TYPES } from '@/constants/document'
import React from 'react'

const Preview = ({ type, document }) => {
    return (
        <div>
            {SIMILAR_DOCUMENT_TYPES.DRIVER.includes(type) ? (
                <DriverCertificate document={document} />
            ) : (
                <AdrCertificate document={document} />
            )}
        </div>
    )
}

export default Preview
