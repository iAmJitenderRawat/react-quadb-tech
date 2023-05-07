import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

export const getShows = createAsyncThunk("shows/getShows", async () => {
  const res = await axios.get(`https://api.tvmaze.com/search/shows?q=all`);
  console.log(res.data);
  return res.data;
});

export const showsSlice = createSlice({
  name: "shows",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getShows.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(getShows.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(getShows.rejected, (state, action) => {
        state.status = action.error.message;
      });
  },
});

export default showsSlice.reducer;
