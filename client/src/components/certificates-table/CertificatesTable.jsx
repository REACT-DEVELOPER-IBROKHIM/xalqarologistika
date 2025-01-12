import { useLocation } from 'react-router-dom'
import { generateDocumentType } from '../../helpers/document-type'

const CertificatesTable = () => {
    const { pathname } = useLocation()
    const docType = generateDocumentType(pathname)

    return <div className="p-4 bg-white"></div>
}

export default CertificatesTable
