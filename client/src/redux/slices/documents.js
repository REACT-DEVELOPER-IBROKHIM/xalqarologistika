import { createSlice } from '@reduxjs/toolkit'
import { loopDocumentsCases } from '@builders/documents-builder'

const initialState = {
    adr: [],
    driver: [],
    manager: [],
    adrTank: [],
    loading: false,
    error: null,
    currentDocumentId: null,
    currentDocument: null,
}

export const documentsSlice = createSlice({
    name: 'documents',
    initialState,
    reducers: {
        removeCurrentDocumentId: state => {
            state.currentDocumentId = null
        },
    },
    extraReducers: builder => {
        loopDocumentsCases(builder)
    },
})

export const { removeCurrentDocumentId } = documentsSlice.actions
