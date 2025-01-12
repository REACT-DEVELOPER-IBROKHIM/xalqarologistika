import { loginUser } from '../../api/auth'
import { AUTH } from '../../constants/thunks'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const loginUserThunk = createAsyncThunk(AUTH.LOGIN, async data => {
    try {
        const response = await loginUser(data)
        return response.data
    } catch (error) {
        throw error
    }
})
