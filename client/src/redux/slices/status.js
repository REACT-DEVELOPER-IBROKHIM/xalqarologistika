import { createSlice } from "@reduxjs/toolkit";
import { loopDocumentStatusBuilder } from "../builders/document-status-builder";

const initialState = {
  statusData: null,
  statusDataLoading: false,
  error: null,
};

export const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    resetDocumentStatus: (state) => {
      state.statusData = null;
      state.statusDataLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    loopDocumentStatusBuilder(builder);
  },
});

export const { resetDocumentStatus } = statusSlice.actions;