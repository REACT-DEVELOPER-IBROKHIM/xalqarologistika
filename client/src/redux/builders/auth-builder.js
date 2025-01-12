import { loginUserThunk } from '../thunks/auth-thunks'

export const loopAuthActions = builder => {
    builder.addCase(loginUserThunk.pending, state => {
        state.loading = true
    })
    builder.addCase(loginUserThunk.fulfilled, (state, { payload }) => {
        console.log(payload)
        state.loading = false
        state.token = payload.token
        state.user = payload.user
    })
    builder.addCase(loginUserThunk.rejected, state => {
        state.loading = false
        state.error = true
    })
}
