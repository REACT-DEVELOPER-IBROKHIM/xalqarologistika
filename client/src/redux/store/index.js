import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../slices/auth";
import { documentsSlice } from "../slices/documents";
import { singleDocumentSlice } from "../slices/single-document";
import { searchSlice } from "../slices/search";
import { statusSlice } from "../slices/status";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    documents: documentsSlice.reducer,
    singleDocument: singleDocumentSlice.reducer,
    search: searchSlice.reducer,
    status: statusSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
