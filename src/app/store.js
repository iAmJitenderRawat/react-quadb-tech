import { configureStore } from "@reduxjs/toolkit";
import singleShowReducer from "../slices/singleShowSlice"
import showsReducer from "../slices/showsSlice";

export default configureStore({
  reducer: {
    singleShow: singleShowReducer,
    shows: showsReducer,
  },
});
