import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createDocument,
  deleteDocument,
  fetchDocumentCount,
  fetchDocuments,
} from "@api/documents";

export const fetchDriverDocumentsThunk = createAsyncThunk(
  "documents/driver",
  async ({ endpoint }) => {
    try {
      const response = await fetchDocuments(endpoint);
      return response;
    } catch (error) {
      throw error;
    }
  },
);

export const fetchManagerDocumentsThunk = createAsyncThunk(
  "documents/manager",
  async ({ endpoint }) => {
    try {
      const response = await fetchDocuments(endpoint);
      return response;
    } catch (error) {
      throw error;
    }
  },
);

export const fetchAdrDocumentsThunk = createAsyncThunk(
  "documents/adr",
  async ({ endpoint }) => {
    try {
      const response = await fetchDocuments(endpoint);
      return response;
    } catch (error) {
      throw error;
    }
  },
);

export const fetchAdrTankDocumentsThunk = createAsyncThunk(
  "documents/adr-tank",
  async ({ endpoint }) => {
    try {
      const response = await fetchDocuments(endpoint);
      return response;
    } catch (error) {
      throw error;
    }
  },
);

export const deleteDocumentThunk = createAsyncThunk(
  "documents/delete",
  async ({ endpoint, id, onSuccess }) => {
    try {
      const response = await deleteDocument(endpoint, id);
      if (onSuccess) onSuccess();
      return response;
    } catch (error) {
      throw error;
    }
  },
);

export const fetchDocumentIdThunk = createAsyncThunk(
  "documents/fetch",
  async ({ endpoint }) => {
    try {
      const response = await fetchDocumentCount(endpoint);
      return response;
    } catch (error) {
      throw error;
    }
  },
);

export const createDocumentThunk = createAsyncThunk(
  "documents/create",
  async ({ endpoint, document, onSuccess }) => {
    try {
      const response = await createDocument(endpoint, document);
      if (onSuccess) onSuccess(response);
      return response;
    } catch (error) {
      throw error;
    }
  },
);
