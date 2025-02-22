import { fetchSearchResultThunk } from "../thunks/search-thunk";

export const loopSearchResult = (builder) => {
  builder.addCase(fetchSearchResultThunk.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(fetchSearchResultThunk.fulfilled, (state, { payload }) => {
    state.loading = false;
    state.searchResults = payload;
  });
  builder.addCase(fetchSearchResultThunk.rejected, (state) => {
    state.loading = false;
    state.error = true;
  });
};
