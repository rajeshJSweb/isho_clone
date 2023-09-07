// store.js

import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../features/productsSlice'; // Update the path as needed
import { api } from '../features/apiSlice'; // Import the API slice correctly
import addCartReducer from '../features/addCartSlice';

export const store = configureStore({
  reducer: {
    products: productsSlice,
    [api.reducerPath]: api.reducer,
    addCart: addCartReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
