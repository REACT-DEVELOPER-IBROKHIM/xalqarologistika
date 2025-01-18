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
}

export const documentsSlice = createSlice({
    name: 'documents',
    initialState,
    extraReducers: builder => {
        loopDocumentsCases(builder)
    },
})
