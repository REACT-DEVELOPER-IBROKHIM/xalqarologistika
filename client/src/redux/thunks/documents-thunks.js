import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    deleteDocument,
    fetchDocumentCount,
    fetchDocuments,
} from '@api/documents'

export const fetchDriverDocumentsThunk = createAsyncThunk(
    'documents/driver',
    async ({ endpoint }) => {
        try {
            const response = await fetchDocuments(endpoint)
            return response
        } catch (error) {
            throw error
        }
    }
)

export const fetchManagerDocumentsThunk = createAsyncThunk(
    'documents/manager',
    async ({ endpoint }) => {
        try {
            const response = await fetchDocuments(endpoint)
            return response
        } catch (error) {
            throw error
        }
    }
)

export const fetchAdrDocumentsThunk = createAsyncThunk(
    'documents/adr',
    async ({ endpoint }) => {
        try {
            const response = await fetchDocuments(endpoint)
            return response
        } catch (error) {
            throw error
        }
    }
)

export const fetchAdrTankDocumentsThunk = createAsyncThunk(
    'documents/adr-tank',
    async ({ endpoint }) => {
        try {
            const response = await fetchDocuments(endpoint)
            return response
        } catch (error) {
            throw error
        }
    }
)

export const deleteDocumentThunk = createAsyncThunk(
    'documents/delete',
    async ({ endpoint, id }) => {
        try {
            const response = await deleteDocument(endpoint, id)
            return response
        } catch (error) {
            throw error
        }
    }
)

export const fetchDocumentIdThunk = createAsyncThunk(
    'documents/fetch',
    async ({ endpoint }) => {
        try {
            const response = await fetchDocumentCount(endpoint)
            return response
        } catch (error) {
            throw error
        }
    }
)
