import { DATE_FORMAT, EMPTY_DOCUMENT } from '@/constants/document'
import {
    fetchDriverDocumentsThunk,
    fetchManagerDocumentsThunk,
    fetchAdrDocumentsThunk,
    fetchAdrTankDocumentsThunk,
    deleteDocumentThunk,
    fetchDocumentIdThunk,
    createDocumentThunk,
    fetchSingleDocumentThunk,
} from '@thunks/documents-thunks'
import { dayjs } from 'dayjs'
import moment from 'moment'

export const loopDocumentsCases = builder => {
    builder.addCase(fetchDriverDocumentsThunk.pending, state => {
        state.loading = true
    })
    builder.addCase(
        fetchDriverDocumentsThunk.fulfilled,
        (state, { payload }) => {
            state.loading = false
            state.driver = payload
        }
    )
    builder.addCase(fetchDriverDocumentsThunk.rejected, state => {
        state.loading = false
        state.error = true
    })
    builder.addCase(fetchManagerDocumentsThunk.pending, state => {
        state.loading = true
    })
    builder.addCase(
        fetchManagerDocumentsThunk.fulfilled,
        (state, { payload }) => {
            state.loading = false
            state.manager = payload
        }
    )
    builder.addCase(fetchManagerDocumentsThunk.rejected, state => {
        state.loading = false
        state.error = true
    })
    builder.addCase(fetchAdrDocumentsThunk.pending, state => {
        state.loading = true
    })
    builder.addCase(fetchAdrDocumentsThunk.fulfilled, (state, { payload }) => {
        state.loading = false
        state.adr = payload
    })
    builder.addCase(fetchAdrDocumentsThunk.rejected, state => {
        state.loading = false
        state.error = true
    })
    builder.addCase(fetchAdrTankDocumentsThunk.pending, state => {
        state.loading = true
    })
    builder.addCase(
        fetchAdrTankDocumentsThunk.fulfilled,
        (state, { payload }) => {
            state.loading = false
            state.adrTank = payload
        }
    )
    builder.addCase(fetchAdrTankDocumentsThunk.rejected, state => {
        state.loading = false
        state.error = true
    })
    builder.addCase(deleteDocumentThunk.fulfilled, state => {
        state.loading = false
        state.error = false
    })
    builder.addCase(deleteDocumentThunk.pending, state => {
        state.loading = true
    })
    builder.addCase(deleteDocumentThunk.rejected, state => {
        state.loading = false
        state.error = true
    })
    builder.addCase(fetchDocumentIdThunk.pending, state => {
        state.loading = true
    })
    builder.addCase(fetchDocumentIdThunk.fulfilled, (state, { payload }) => {
        state.loading = false
        state.currentDocumentId = payload
        state.document = payload
    })
    builder.addCase(fetchDocumentIdThunk.rejected, state => {
        state.loading = false
        state.error = true
    })
    builder.addCase(createDocumentThunk.pending, state => {
        state.loading = true
    })
    builder.addCase(createDocumentThunk.fulfilled, state => {
        state.loading = false
        state.error = false
    })
    builder.addCase(createDocumentThunk.rejected, state => {
        state.loading = false
        state.error = true
    })
    builder.addCase(fetchSingleDocumentThunk.pending, state => {
        state.loading = true
    })
    builder.addCase(
        fetchSingleDocumentThunk.fulfilled,
        (state, { payload }) => {
            state.loading = false
            if (payload.id === EMPTY_DOCUMENT) {
                state.currentDocument = {
                    ...payload,
                    birthDate: moment(new Date()).format(DATE_FORMAT),
                    from: moment(new Date()).format(DATE_FORMAT),
                    to: moment(new Date()).format(DATE_FORMAT),
                }
            } else {
                state.currentDocument = payload
            }
        }
    )
    builder.addCase(fetchSingleDocumentThunk.rejected, state => {
        state.loading = false
        state.error = true
    })
}
