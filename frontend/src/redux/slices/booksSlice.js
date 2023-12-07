import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

export const { setBooks } = booksSlice.actions;
export default booksSlice.reducer;
