import {
    fetchAdrDocumentsThunk,
    fetchAdrTankDocumentsThunk,
    fetchDriverDocumentsThunk,
    fetchManagerDocumentsThunk,
} from '@/redux/thunks/documents-thunks'

export const updateUI = type => {
    switch (type) {
        case 'driver':
            return fetchDriverDocumentsThunk({ endpoint: type })
        case 'adr':
            return fetchAdrDocumentsThunk({ endpoint: type })
        case 'manager':
            return fetchManagerDocumentsThunk({ endpoint: type })
        case 'adr-tank':
            return fetchAdrTankDocumentsThunk({ endpoint: type })
    }
}
