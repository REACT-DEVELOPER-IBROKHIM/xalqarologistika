import { loginUserThunk } from "@thunks/auth-thunks";
import { setDataToLocalStorage } from "@helpers/localStorageActions";

export const loopAuthCases = (builder) => {
  builder.addCase(loginUserThunk.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(loginUserThunk.fulfilled, (state, { payload }) => {
    setDataToLocalStorage("token", payload.token);
    setDataToLocalStorage("user", payload.user);
    state.loading = false;
    state.token = payload.token;
    state.user = payload.user;
    state.isAuthenticated = true;
  });
  builder.addCase(loginUserThunk.rejected, (state) => {
    state.loading = false;
    state.error = true;
  });
};
