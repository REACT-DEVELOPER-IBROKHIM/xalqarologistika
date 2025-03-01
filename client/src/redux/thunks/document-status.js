import { fetchSingleDocumentById } from "@api/documents";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDocumentStatusDataThunk = createAsyncThunk(
  "documents/get-document-status-by-id",
  async (id) => {
    try {
      const response = await fetchSingleDocumentById(id);
      return response;
    } catch (error) {
      throw error;
    }
  },
);
