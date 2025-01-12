import { createSlice } from '@reduxjs/toolkit'
import { loopAuthActions } from '../builders/auth-builder'

const initialState = {
    token: null,
    user: null,
    loading: false,
    error: null,
}

export const authSlice = createSlice({
    initialState,
    name: 'auth',
    extraReducers: builder => {
        loopAuthActions(builder)
    },
})
