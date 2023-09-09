import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [], // Make sure it's initialized as an array
  isLoading: false,
  isError: null,
};

export const fetchProductsAsync = createAsyncThunk(
  "products/fetchProductsAsync",
  async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.isLoading = true;
        state.products = []; // Use state.products to update the products list
        state.isError = null;
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.products = Array.isArray(action.payload) ? action.payload : [];
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
        state.products = []; // Use state.products to update the products list
      });
  },
});

export default productsSlice.reducer;
