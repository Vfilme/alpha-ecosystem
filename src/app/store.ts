import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/api';
import { productsReducer } from '../productsSlice';
import { favoritesReducer } from './favoritesSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    products: productsReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
