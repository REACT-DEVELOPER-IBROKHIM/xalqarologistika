import { createSlice } from '@reduxjs/toolkit'
import { loopSingleDocumentCases } from '@builders/single-document-builder'
import {
    getDataFromLocalStorage,
    removeDataFromLocalStorage,
} from '@/helpers/localStorageActions'

const initialState = {
    currentDocument: getDataFromLocalStorage('currentDocument') || null,
    loading: false,
    error: null,
}

export const singleDocumentSlice = createSlice({
    name: 'documents',
    initialState,
    reducers: {
        removeCurrentDocument: state => {
            removeDataFromLocalStorage('currentDocument')
            state.currentDocument = null
        },
    },
    extraReducers: builder => {
        loopSingleDocumentCases(builder)
    },
})

export const { removeCurrentDocument } = singleDocumentSlice.actions
