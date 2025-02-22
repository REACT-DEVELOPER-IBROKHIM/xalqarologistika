import { fetchSearchResult } from "@api/documents";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSearchResultThunk = createAsyncThunk(
  "documents/edit",
  async ({ id }) => {
    try {
      const response = await fetchSearchResult(id);
      return response;
    } catch (error) {
      throw error;
    }
  },
);
