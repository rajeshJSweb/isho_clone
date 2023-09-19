// store.js

import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../features/productsSlice';
import { api } from '../features/apiSlice'; 
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
