import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
 categories: [],
 loading: false,
 error: "",
};

export const fetchCategories = createAsyncThunk(
 "categories/fetchCategories",
 async () => {
  const { data } = await axios.get("/categories");
  return data;
 }
);

const categoriesSlice = createSlice({
 name: "categories",
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder.addCase(fetchCategories.pending, (state) => {
   state.loading = true;
  });
  builder.addCase(fetchCategories.fulfilled, (state, action) => {
   state.loading = false;
   state.categories = action.payload;
   state.error = "";
  });
  builder.addCase(fetchCategories.rejected, (state, action) => {
   state.loading = false;
   state.categories = [];
   state.error = action.error.message;
  });
 },
});

export const categoriesReducer = categoriesSlice.reducer;
