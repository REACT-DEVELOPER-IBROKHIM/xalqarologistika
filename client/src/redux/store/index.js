import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../slices/auth'
import { documentsSlice } from '../slices/documents'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        documents: documentsSlice.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
})

export default store
