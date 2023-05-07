import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

export const getSingleShow = createAsyncThunk(
  "show/getSingleShow",
  async (id) => {
    const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    console.log(id);
    console.log(res.data);
    return res.data;
  }
);

export const singleShowSlice = createSlice({
  name: "singleShow",
  initialState: {
    data: {},
    status: STATUSES.IDLE,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSingleShow.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(getSingleShow.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(getSingleShow.rejected, (state, action) => {
        state.status = action.error.message;
      });
  },
});

export default singleShowSlice.reducer;
