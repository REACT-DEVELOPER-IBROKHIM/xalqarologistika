import {
  fetchSingleDocument,
  fetchSingleDocumentById,
  updateSingleDocument,
} from "@/api/documents";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSingleDocumentThunk = createAsyncThunk(
  "documents/edit",
  async ({ endpoint, id }) => {
    try {
      const response = await fetchSingleDocument(endpoint, id);
      return response;
    } catch (error) {
      throw error;
    }
  },
);

export const updateDocumentThunk = createAsyncThunk(
  "documents/update",
  async ({ endpoint, id, document, onSuccess }) => {
    try {
      const response = await updateSingleDocument(endpoint, id, document);
      if (onSuccess) onSuccess();
      return response;
    } catch (error) {
      throw error;
    }
  },
);

export const fetchSingleDocumentByIdThunk = createAsyncThunk(
  "documents/get-by-id",
  async (id) => {
    try {
      const response = await fetchSingleDocumentById(id);
      return response;
    } catch (error) {
      throw error;
    }
  },
);
