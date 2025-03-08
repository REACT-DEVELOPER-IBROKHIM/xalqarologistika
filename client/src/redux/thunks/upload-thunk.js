import { uploadSignature, removeDocumentSignature } from "@/api/upload";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const uploadSignatureThunk = createAsyncThunk(
  "signature/upload",
  async ({ id, type, file, onSuccess }) => {
    try {
      const response = await uploadSignature(id, type, file);
      if (onSuccess) onSuccess(response);
    } catch (error) {
      throw error;
    }
  },
);

export const deleteDocumentSignatureThunk = createAsyncThunk(
  "signature/delete",
  async ({ id, endpoint, onSuccess }) => {
    try {
      const response = await removeDocumentSignature(id, endpoint);
      if (onSuccess) onSuccess();
      return response;
    } catch (error) {
      throw error;
    }
  },
);
