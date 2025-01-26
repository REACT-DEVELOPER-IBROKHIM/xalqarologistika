import { createSlice } from "@reduxjs/toolkit";
import { loopAuthCases } from "@builders/auth-builder";
import {
  getDataFromLocalStorage,
  removeDataFromLocalStorage,
} from "@helpers/localStorageActions";

const initialState = {
  token: getDataFromLocalStorage("token") || null,
  user: getDataFromLocalStorage("user") || null,
  isAuthenticated: getDataFromLocalStorage("token") ? true : false,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    logout: (state) => {
      removeDataFromLocalStorage("token");
      removeDataFromLocalStorage("user");
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    loopAuthCases(builder);
  },
});

export const { logout } = authSlice.actions;
