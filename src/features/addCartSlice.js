import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, image } = action.payload;
      const existingProduct = state.cart.find((product) => product.id === id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ id, title, price, image, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
    },
    
    buyNowProduct: (state, action) => {
      const { id, title, price, image } = action.payload;
      const existingProduct = state.cart.find((product) => product.id === id);

      if (existingProduct) {
        existingProduct.quantity = 1;
      } else {
        state.cart.push({ id, title, price, image, quantity: 1 });
      }
    },
    incrementItem: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.cart.find((product) => product.id === id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },
    decrementItem: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.cart.find((product) => product.id === id);

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          state.cart = state.cart.filter((item) => item.id !== id);
        }
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  buyNowProduct,
  incrementItem,
  decrementItem,
} = cartSlice.actions;

export default cartSlice.reducer;
