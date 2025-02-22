import { createSlice } from "@reduxjs/toolkit";
import { loopSearchResult } from "../builders/search-builder";

const initialState = {
  searchResults: null,
  loading: false,
  error: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    removeSearchResults: (state) => {
      state.searchResults = null;
    },
  },
  extraReducers: (builder) => {
    loopSearchResult(builder);
  },
});
