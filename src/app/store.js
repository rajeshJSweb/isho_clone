// store.js

import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../features/productsSlice';
import { api } from '../features/apiSlice'; 
import addCartReducer from '../features/addCartSlice';
import createUserReducer from '../features/createUserSlice';
import loginReducer from '../features/loginSlice';
import resetPasswordReducer from '../features/resetPasswordSlice';
import logOutReducer from '../features/logOutSlice';

export const store = configureStore({
  reducer: {
    products: productsSlice,
    [api.reducerPath]: api.reducer,
    addCart: addCartReducer,
    createUser: createUserReducer,
    login:loginReducer,
    logout:logOutReducer,
    password:resetPasswordReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
