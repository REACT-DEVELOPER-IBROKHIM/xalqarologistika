import { fetchDocumentStatusDataThunk } from "../thunks/document-status";

export const loopDocumentStatusBuilder = (builder) => {
  builder.addCase(fetchDocumentStatusDataThunk.pending, (state) => {
    state.statusDataLoading = true;
  });
  builder.addCase(
    fetchDocumentStatusDataThunk.fulfilled,
    (state, { payload }) => {
      state.statusDataLoading = false;
      state.statusData = payload;
    },
  );
  builder.addCase(fetchDocumentStatusDataThunk.rejected, (state) => {
    state.statusDataLoading = false;
    state.error = true;
  });
};
